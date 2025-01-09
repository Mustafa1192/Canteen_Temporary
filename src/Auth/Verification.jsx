    // Resend OTP with Countdown
    import React, { useState, useEffect } from 'react';
    import { useLocation, useNavigate } from "react-router-dom";

    const Verify = () => {
        const [otp, setOtp] = useState('');
        const [error, setError] = useState('');
        const [success, setSuccess] = useState('');
        const [resendMessage, setResendMessage] = useState('');
        const [timer, setTimer] = useState(60);
        const [isResendDisabled, setIsResendDisabled] = useState(true);

        const location = useLocation();
        const navigate = useNavigate();

        // Timer logic for countdown
        useEffect(() => {
            let countdown;
            if (timer > 0) {
                countdown = setInterval(() => {
                    setTimer((prev) => prev - 1);
                }, 1000);
            } else {
                setIsResendDisabled(false);
            }

            return () => clearInterval(countdown);
        }, [timer]);

        // Function to handle OTP verification
        const handleVerify = async (event) => {
            event.preventDefault();

            try {
                const response = await fetch('http://localhost:5000/verify-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: location.state.email,
                        otp,
                        password: location.state.password,
                    }),
                });

                const data = await response.json();

                if (response.status === 200) {
                    setSuccess('OTP verified successfully!');
                    navigate('/Notification');
                } else {
                    setError(data.message || 'Invalid OTP. Please try again.');
                }
            } catch (error) {
                setError('Server error, please try again later.');
            }
        };

        // Function to handle Resend OTP
        const handleResendOtp = async () => {
            setResendMessage('');
            setError('');
            setSuccess('');
            setTimer(60);
            setIsResendDisabled(true);

            try {
                const response = await fetch('http://localhost:5000/send-otp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: location.state.username,
                        email: location.state.email,
                    }),
                });

                const data = await response.json();

                if (response.status === 200) {
                    setResendMessage('OTP has been resent to your email!');
                } else {
                    setError(data.message || 'Failed to resend OTP.');
                }
            } catch (error) {
                setError('Error resending OTP, please try again later.');
            }
        };

        return (
            <div className="h-screen bg-[#FAF5FF] p-5">
                <div className='pt-24'>
                    <h1 className='text-center text-3xl font-bold text-[#534E55]'>Verify OTP</h1>
                    <p className='text-center text-lg text-[#5B5B5E] mt-12'>
                        An OTP has been sent to {location.state.email}
                    </p>
                </div>

                <form onSubmit={handleVerify} className='mt-4 text-center'>
                    <input 
                        className='p-5 mt-4 bg-[#FFFFFF] rounded-2xl w-96 drop-shadow-md' 
                        placeholder='Enter OTP' 
                        type='text' 
                        value={otp} 
                        onChange={(e) => setOtp(e.target.value)} 
                    />
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                    {success && <p className="text-green-500 mt-2">{success}</p>}
                    {resendMessage && <p className="text-green-500 mt-2">{resendMessage}</p>}

                    <button 
                        className='p-5 mt-8 bg-[#FE724C] rounded-2xl w-96 drop-shadow-md' 
                        type='submit'>
                        <h1 className='text-center text-white font-medium text-lg'>VERIFY OTP</h1>
                    </button>
                </form>

                <p className='text-center mt-6 text-[#5B5B5E]'>
                    Resend OTP in {timer > 0 ? `${timer}s` : ''}
                </p>
                <p 
                    className={`text-center mt-2 text-[#5B5B5E] cursor-pointer ${isResendDisabled ? 'opacity-50' : ''}`} 
                    onClick={() => {
                        if (!isResendDisabled) handleResendOtp();
                    }}>
                    Resend OTP
                </p>
            </div>
        );
    };

    export default Verify;
