///////////////////////////////////////////////////////////// Working With Latest Reqiurements
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto'); // To generate OTP
const bcrypt = require('bcrypt'); // To hash passwordsconst razorpay = require('razorpay');
const razorpay = require('razorpay');
const instance = new razorpay({
  key_id: 'YOUR_KEY_ID',
  key_secret: 'YOUR_KEY_SECRET',
});

instance.orders.create({ amount: 50000, currency: 'INR', receipt: 'order_rcptid_11' }, function (err, order) {
  console.log(order);
});


const app = express();
const PORT = 5000;
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
    
// MongoDB Connection URI
const MONGODB_URI = 'mongodb+srv://mustafakhan31499:cNG8NPtbhNaY5ieh@cluster1.cye9d.mongodb.net/Canteen_app?retryWrites=true&w=majority&appName=Cluster1';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected successfully 🚀'))
    .catch(error => console.error('MongoDB connection error:', error));

// User Schema and Model
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }
}, { collection: 'User', timestamps: true });

const User = mongoose.model('User', userSchema);

// TempUser Schema and Model
const tempUserSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    otp: { type: String },
    otpExpires: { type: Date }
}, { collection: 'TempUser', timestamps: true });

const TempUser = mongoose.model('TempUser', tempUserSchema);

// Nodemailer Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'onemenu.it@gmail.com',
        pass: 'euwo vymq gdxb jsmf' // Consider environment variables or secure vault for credentials
    }
});

// Route: Register New User After OTP Verification
app.post('/register', async (req, res) => {
  const { email, username, password, otp } = req.body;

  try {
      const tempUser = await TempUser.findOne({ email });

      if (!tempUser || tempUser.otp !== otp) {
          return res.status(400).json({ message: 'Invalid or expired OTP.' });
      }

      // Check if the username or email is already taken
      const existingUser = await User.findOne({ $or: [{ email }, { username }] });
      if (existingUser) {
          return res.status(400).json({ message: 'Email or username already in use.' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user
      const newUser = new User({ email, username, password: hashedPassword });
      await newUser.save();

      // Cleanup TempUser record
      await TempUser.deleteOne({ email });

      res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
      console.error('Error during registration:', error);
      res.status(500).json({ message: 'Server error.' });
  }
});


// Helper: Generate OTP
const generateOTP = () => crypto.randomInt(100000, 999999).toString();

// Helper: Send Email
const sendEmail = (to, subject, text) => {
    return transporter.sendMail({
        from: 'onemenu.it@gmail.com',
        to,
        subject,
        text,
    });
};

// Route: Send OTP for Login/Registration
app.post('/send-otp', async (req, res) => {
    const { email } = req.body;

    try {
        const userInDB = await User.findOne({ email });
        const otp = generateOTP();

        if (userInDB) {
            // Existing user: Send OTP for login
            await TempUser.findOneAndUpdate(
                { email },
                { otp, otpExpires: Date.now() + 60000 },
                { upsert: true, new: true }
            );

            await sendEmail(email, 'Login OTP', `Your OTP is: ${otp}`);
            return res.status(200).json({ 
                message: 'OTP sent for login.', 
                isNewUser: false // No registration fields for existing user
            });
        } else {
            // New user: Send OTP and provide registration fields
            await TempUser.findOneAndUpdate(
                { email },
                { otp, otpExpires: Date.now() + 60000 },
                { upsert: true, new: true }
            );

            await sendEmail(email, 'Registration OTP', `Your OTP is: ${otp}`);
            return res.status(200).json({ 
                message: 'OTP sent for registration.', 
                isNewUser: true, // Show registration fields for new user
                registrationFields: { // You can customize the registration fields here
                    username: "",
                    password: "",
                    confirmPassword: ""
                }
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error occurred.' });
    }
});


// Route: Verify OTP for Login/Rwgistration.
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
      // Find the temporary user record with the OTP
      const tempUser = await TempUser.findOne({ email });

      // Check if the user exists in TempUser and verify the OTP
      if (!tempUser) {
          return res.status(404).json({ message: 'No pending OTP request found.' });
      }

      // Check if OTP matches
      if (tempUser.otp !== otp) {
          return res.status(400).json({ message: 'Invalid OTP.' });
      }

      // Check if OTP is expired
      if (Date.now() > tempUser.otpExpires) {
          return res.status(400).json({ message: 'OTP has expired.' });
      }

      // OTP is valid, now find the user in the main User collection
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(404).json({ message: 'User not found.' });
      }

      // If the user exists, you can proceed to logging them in.
      // For now, we'll send a success response as a simple way of completing the login
      res.status(200).json({ message: 'Login successful.' });

      // (Optional) Generate JWT token here if you use tokens for authentication.

      // Cleanup: Delete the temporary OTP entry after it's been used.
      await TempUser.deleteOne({ email });

  } catch (error) {
      console.error('Error during OTP verification:', error);
      res.status(500).json({ message: 'Server error during OTP verification.' });
  }
});


// Route: Resend OTP
app.post('/resend-otp', async (req, res) => {
    const { email } = req.body;

    try {
        const otp = generateOTP();
        await TempUser.findOneAndUpdate(
            { email },
            { otp, otpExpires: Date.now() + 60000 },
            { upsert: true, new: true }
        );

        await sendEmail(email, 'Your New OTP', `Your new OTP is: ${otp}`);
        res.status(200).json({ message: 'OTP resent successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
