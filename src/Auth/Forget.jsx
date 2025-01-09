import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function ForgetPassword() {
    const [formData, setFormData] = useState({ email: '', otp: '', newPassword: '', confirmPassword: '' });
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [resendTimer, setResendTimer] = useState(60);
    const [canResend, setCanResend] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (resendTimer > 0) {
            const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [resendTimer]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@aiktc\.ac\.in$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleResend = async () => {
        try {
            const response = await axios.post('http://localhost:5000/forgot-password', { email: formData.email });
            setMessageType('success');
            setMessage('OTP resent. Please check your email.');
            setResendTimer(60);
            setCanResend(false);
        } catch (error) {
            setMessageType('error');
            setMessage('Failed to resend OTP. Please try again later.');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (step === 1) {
            if (!validateEmail(formData.email)) {
                setMessageType('error');
                setMessage('Please use an email ending with @aiktc.ac.in.');
                return;
            }
            try {
                const response = await axios.post('http://localhost:5000/forgot-password', { email: formData.email });
                setMessageType('success');
                setMessage(response.data.message);
                setStep(2);
                setResendTimer(60);
                setCanResend(false);
            } catch (error) {
                setMessageType('error');
                setMessage(error.response.data.message);
            }
        } else if (step === 2) {
            if (formData.newPassword !== formData.confirmPassword) {
                setMessageType('error');
                setMessage('Passwords do not match');
                return;
            }
            if (!validatePassword(formData.newPassword)) {
                setMessageType('error');
                setMessage('Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, one number, and one special character.');
                return;
            }
            try {
                const response = await axios.post('http://localhost:5000/reset-password', {
                    email: formData.email,
                    otp: formData.otp,
                    newPassword: formData.newPassword
                });
                setMessageType('success');
                setMessage(response.data.message);
                setTimeout(() => navigate('/login'), 1000); // Redirect after 3 seconds
            } catch (error) {
                setMessageType('error');
                setMessage(error.response.data.message);
            }
        }
    };

    return (
        <div className="w-full h-screen bg-[#FAF5FF] p-5">
            <div className='pt-16'>
                <Link to="/Index">
                    <h1 className='text-center text-3xl font-bold text-[#534E55]'> Reset Your Password</h1>
                </Link>
                <p className='text-center text-2xl text-[#808080] mt-4'>Follow the steps to reset your password</p>
            </div>

            <div className='flex justify-center items-center'>
                <form className='mt-12 text-center w-full sm:w-96' onSubmit={handleSubmit}>
                    {step === 1 && (
                        <input
                            className='p-5 bg-[#FFFFFF] rounded-2xl w-full sm:w-96 drop-shadow-md'
                            placeholder='Enter your AIKTC email'
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    )}
                    {step === 2 && (
                        <>
                            <input
                                className='p-5 mt-4 bg-[#FFFFFF] rounded-2xl w-full sm:w-96 drop-shadow-md'
                                placeholder='Enter OTP'
                                type='text'
                                name='otp'
                                value={formData.otp}
                                onChange={handleChange}
                            />
                            {canResend ? (
                                <button
                                    className="text-blue-500 underline mt-2"
                                    type="button"
                                    onClick={handleResend}
                                >
                                    Resend OTP
                                </button>
                            ) : (
                                <p className="text-gray-500 mt-2">Resend OTP in {resendTimer}s</p>
                            )}
                            <div className='flex mt-4 w-full sm:w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md'>
                                <input
                                    className='py-1 pb-5 px-5 w-full sm:w-96 mt-4 bg-[#FFFFFF] my-auto focus:outline-none rounded-2xl border-transparent'
                                    placeholder='New Password'
                                    type={showPassword ? "text" : "password"}
                                    name='newPassword'
                                    value={formData.newPassword}
                                    onChange={handleChange}
                                />
                                <span className="cursor-pointer my-auto px-5 text-[#808080]" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                            </div>
                            <div className='flex mt-4 w-full sm:w-96 bg-[#FFFFFF] rounded-2xl drop-shadow-md'>
                                <input
                                    className='py-1 pb-5 px-5 w-full sm:w-96 mt-4 bg-[#FFFFFF] my-auto focus:outline-none rounded-2xl border-transparent'
                                    placeholder='Confirm Password'
                                    type={showPassword ? "text" : "password"}
                                    name='confirmPassword'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                <span className="cursor-pointer my-auto px-5 text-[#808080]" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                            </div>
                        </>
                    )}
                    {message && <p className={`text-center mt-4 ${messageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                    <button className='p-5 mt-8 bg-[#FE724C] rounded-2xl drop-shadow-md w-full sm:w-80' type='submit'>
                        <h1 className='text-center text-white font-medium text-lg'>
                            {step === 1 ? 'Send OTP' : 'Submit'}
                        </h1>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;