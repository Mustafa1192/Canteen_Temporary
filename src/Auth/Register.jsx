// Responsive
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Add state for password visibility

    const navigate = useNavigate();

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    // Password validation regex (at least 8 characters, one uppercase, one lowercase, one special character)
    const isValidPassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const emailRegex = /^[a-zA-Z0-9._%+-]+@aiktc\.ac\.in$/;

        if (!name || !email || !password) {
            setError('All fields are required.');
            return;
        }

        if (!emailRegex.test(email)) {
            setError('Please use an email ending with @aiktc.ac.in.');
            return;
        }

        if (!isValidPassword(password)) {
            setError('Your password must be at least 8 characters long and include at least one uppercase letter (A-Z), one lowercase letter (a-z), and one special character (e.g., ! @ # $ % & *).');
            return;
        }

        setError(''); // Clear errors before sending request

        try {
            const response = await fetch('http://localhost:5000/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: name,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.status === 200) {
                setSuccess(data.message);
                navigate('/Verification', { state: { email, password, name } });
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Server error, please try again later.');
        }
    };

    return (
        <div className="h-screen bg-[#FAF5FF] p-5 flex justify-center items-center">
            <div className='pt-10 w-full sm:w-96 md:w-80'>
                <Link to="/Index">
                    <h1 className='text-center text-3xl font-bold text-[#534E55]'> Welcome!</h1>
                </Link>
                <p className='text-center text-2xl text-[#808080] mt-4'>Sign up to continue</p>

                <form onSubmit={handleSubmit} className='mt-10 text-center flex flex-col items-center'>
                    <input 
                        className='p-5 w-full sm:w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md' 
                        placeholder='Enter username' 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <br />
                    <input 
                        className='p-5 w-full sm:w-96 mt-1 bg-[#FFFFFF] rounded-2xl drop-shadow-md' 
                        placeholder='E-mail' 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br />
                    <div className='flex w-full sm:w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md focus-within:ring-2 focus-within:ring-black'>
                        <input 
                            className='py-1 pb-5 px-5 w-full sm:w-96 mt-4 bg-[#FFFFFF] my-auto focus:outline-none rounded-2xl border-transparent' 
                            placeholder='Password' 
                            type={showPassword ? "text" : "password"} 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <span 
                            className="cursor-pointer my-auto px-5 text-[#808080]" 
                            onClick={togglePasswordVisibility}
                        >
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </span>
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">{success}</p>}

                    <button 
                        className='p-5 w-full sm:w-96 mt-6 bg-[#FE724C] rounded-2xl drop-shadow-md' 
                        type="submit"
                    >
                        <h1 className='text-center text-white font-medium text-lg'>GET OTP</h1>
                    </button>
                </form>

                <Link to="/Login">
                    <h2 className='text-center mt-6'>Already have an account? &nbsp;
                        <span className='text-[#FE724C]'>Login</span>
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default RegistrationForm;