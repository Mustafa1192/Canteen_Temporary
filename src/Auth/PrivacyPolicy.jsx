import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiFillLock, AiOutlineUser, AiFillCreditCard } from "react-icons/ai";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Privacy Policy Data
  const policies = [
    {
      id: 1,
      title: "Data Collection",
      icon: <AiOutlineUser className="mr-2 text-lg text-[#555]" />,
      description:
        "We collect personal information to improve our services. Your data is handled securely and is never shared without your consent.",
    },
    {
      id: 2,
      title: "Your Rights",
      icon: <AiFillLock className="mr-2 text-lg text-[#555]" />,
      description:
        "You have the right to access, update, or delete your data at any time. Please contact us for any queries related to your data privacy.",
    },
    {
      id: 3,
      title: "Secure Payments",
      icon: <AiFillCreditCard className="mr-2 text-lg text-[#555]" />,
      description:
        "All payment information is encrypted and processed securely. We do not store your card details.",
    },
    {
      id: 4,
      title: "Personalized Experience",
      icon: <AiOutlineUser className="mr-2 text-lg text-[#555]" />,
      description:
        "We use your preferences to offer you a personalized experience with relevant offers and recommendations.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF5FF] lg:px-60 flex flex-col items-center">
      {/* Back Button */}
      <div className="bg-white rounded-lg p-2 shadow-md w-full">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center text-[#333] py-3"
        >
          <AiOutlineArrowLeft className="mr-2 text-xl" />
          Privacy Policy
        </button>
      </div>

      {/* Privacy Policy Content */}
      <div className="p-2">
      <div className="p-6 w-full rounded-xl shadow-md bg-white">
        {policies.map((policy) => (
          <div key={policy.id} className="mb-4">
            <h2 className="text-xl font-semibold text-[#555] mb-3 flex items-center">
              {policy.icon} {policy.title}
            </h2>
            <p className="text-sm text-gray-600 leading-6 mb-4">{policy.description}</p>
            {policy.id !== policies.length && <hr className="border-gray-300 mb-4" />}
          </div>
        ))}
      </div>
      </div>

      {/* Bottom Text */}
      <h2 className="mt-8 flex items-center text-xl font-bold mb-6 text-gray-300 text-center">
        <span className="flex-grow h-px bg-gray-300 mr-4"></span>
        Your privacy is secure with us.
        <span className="flex-grow h-px bg-gray-300 ml-4"></span>
      </h2>
    </div>
  );
};

export default PrivacyPolicy;
