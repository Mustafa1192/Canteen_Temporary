import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai"; // For back arrow icon

const FaqsCard = (props) => {
    const answerElRef = useRef();
    const [state, setState] = useState(false);
    const [answerH, setAnswerH] = useState("0px");
    const { faqsList, idx } = props;

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight;
        setState(!state);
        setAnswerH(`${answerElH + 20}px`);
    };

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {state ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                )}
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={state ? { height: answerH } : { height: "0px" }}
            >
                <div>
                    <p className="text-gray-500">{faqsList.a}</p>
                </div>
            </div>
        </div>
    );
};

const ProfileFAQs = () => {
    const navigate = useNavigate(); // Hook for navigation

// FAQ Data
const faqsList = [
    {
        q: "What is the purpose of this platform?",
        a: "Our platform is designed to provide users with an interactive and seamless experience for accessing various services, from questions to personalized recommendations. We aim to make everyday tasks easier and more engaging.",
    },
    {
        q: "How do I create an account?",
        a: "To create an account, simply click on the 'Sign Up' button on the homepage, fill out the required details such as your name, email, and password, and click 'Submit'. You’ll receive a confirmation email to verify your account.",
    },
    {
        q: "Is my personal data secure?",
        a: "Yes, we take your privacy and data security seriously. We implement the latest encryption techniques and comply with privacy regulations to ensure that your information is safe and protected.",
    },
    {
        q: "Can I modify my account information?",
        a: "Yes, you can modify your account information anytime by going to the 'Account Settings' page. There, you can update your name, email address, and other details.",
    },
    {
        q: "What should I do if I forget my password?",
        a: "If you forget your password, simply click on the 'Forgot Password' link on the login page, enter your registered email address, and follow the instructions to reset your password.",
    },
    {
        q: "Do you offer customer support?",
        a: "Yes, we offer 24/7 customer support to help with any issues or questions you may have. You can contact us via email, chat, or through the support page on our website.",
    },
    {
        q: "Is this platform mobile-friendly?",
        a: "Absolutely! Our platform is fully optimized for mobile devices, so you can enjoy the same seamless experience whether you're using a desktop, tablet, or smartphone.",
    },
    {
        q: "Are there any fees associated with using the platform?",
        a: "We offer both free and premium plans. The free plan provides basic features, while the premium plan gives you access to exclusive features and additional functionalities. You can check out the pricing page for more details.",
    },
    {
        q: "How do I cancel my subscription?",
        a: "To cancel your subscription, go to your account settings and select the 'Subscription' tab. From there, you can cancel your subscription or choose a different plan.",
    },
    {
        q: "How do I provide feedback or suggestions?",
        a: "We value user feedback! You can submit your suggestions or feedback through the 'Contact Us' page on our website. Alternatively, you can send us an email directly.",
    },
];


    // Handle back navigation
    const handleBackClick = () => {
        navigate("/profile");
    };

    return (
        <div className="w-full min-h-screen bg-[#FAF5FF] lg:px-60 flex flex-col items-center">
            {/* Top Bar */}
            <div className="bg-white rounded-lg p-2 border w-full">
                <button
                    onClick={handleBackClick}
                    className="flex items-center text-[#333] py-3"
                >
                    <AiOutlineArrowLeft className="mr-2 text-xl" />
                    Back to Profile
                </button>
            </div>

            {/* FAQ Content */}
            <div className="p-2 w-full">
                <div className="p-6 rounded-xl shadow-md bg-white">
                    {/* FAQ Header */}
                    <p className="font-bold text-gray-600 leading-6 mb-4">
                        Answered all frequently asked questions. Still confused? Feel free to contact us.
                    </p>

                    {/* Dynamic FAQ Cards */}
                    {faqsList.map((item, idx) => (
                        <FaqsCard idx={idx} faqsList={item} key={idx} />
                    ))}
                </div>
            </div>

            {/* Bottom Text */}
            <h2 className="mt-8 flex items-center text-xl font-bold mb-6 text-gray-300 text-center">
                <span className="flex-grow h-px bg-gray-300 mr-4"></span>
                Still have questions? Feel free to reach out to our support team.
                <span className="flex-grow h-px bg-gray-300 ml-4"></span>
            </h2>
        </div>
    );
};

export default ProfileFAQs;
