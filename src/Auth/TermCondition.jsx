import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  // Terms and Conditions Data
  const terms = [
    {
      id: 1,
      title: "Acceptance of Terms",
      description:
        "By accessing or using our platform, you agree to comply with and be legally bound by these terms and conditions.",
    },
    {
      id: 2,
      title: "User Responsibilities",
      description:
        "Users must provide accurate information during registration and refrain from any illegal or unauthorized activities on the platform.",
    },
    {
      id: 3,
      title: "Intellectual Property",
      description:
        "All content on this platform, including text, graphics, and logos, is the property of the platform and protected by copyright laws.",
    },
    {
      id: 4,
      title: "Limitation of Liability",
      description:
        "The platform is not responsible for any indirect, incidental, or consequential damages arising from the use of our services.",
    },
    {
      id: 5,
      title: "Termination of Service",
      description:
        "We reserve the right to suspend or terminate your access to the platform at any time for violations of these terms.",
    },
    {
      id: 6,
      title: "Governing Law",
      description:
        "These terms and conditions are governed by the laws of the jurisdiction where the platform operates.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FAF5FF] lg:px-60 flex flex-col items-center">
      {/* Top Bar */} 
      <div className="bg-white rounded-lg p-2 border w-full">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center text-[#333] py-3"
        >
          <AiOutlineArrowLeft className="mr-2 text-xl" />
          Terms & Conditions
        </button>
      </div>

      {/* Terms and Conditions Content */}
      <div className="p-2">
        <div className="p-6 w-full rounded-xl shadow-md bg-white">
          {terms.map((term) => (
            <div key={term.id} className="mb-4">
              <h2 className="text-xl font-semibold text-[#555] mb-3">
                {term.title}
              </h2>
              <p className="text-sm text-gray-600 leading-6 mb-4">
                {term.description}
              </p>
              {term.id !== terms.length && <hr className="border-gray-300 mb-4" />}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <h2 className="mt-8 flex items-center text-xl font-bold mb-6 text-gray-300 text-center">
        <span className="flex-grow h-px bg-gray-300 mr-4"></span>
        Your trust is our priority.
        <span className="flex-grow h-px bg-gray-300 ml-4"></span>
      </h2>
    </div>
  );
};

export default TermsAndConditions;
