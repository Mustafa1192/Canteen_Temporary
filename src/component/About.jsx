import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const AboutUs = () => {
  const navigate = useNavigate();

  // About Us Data
  const aboutUsData = {
    intro:
      "We are a passionate team dedicated to revolutionizing the way you interact with our services. Our mission is to bring convenience and quality through innovative solutions.",
    sections: [
      {
        id: 1,
        title: "Our Vision",
        content:
          "To be a leading platform providing exceptional services and building strong relationships with our users.",
      },
      {
        id: 2,
        title: "Meet the Team",
        content:
          "A blend of creative minds and tech enthusiasts working together to deliver the best user experience.",
      },
      {
        id: 3,
        title: "About Our Website",
        content:
          "Our platform is built with the latest technology to ensure a seamless and secure experience. From personalized recommendations to secure transactions, we strive to offer the best for our users. We value your trust and aim to exceed your expectations with every interaction.",
      },
    ],
    footer: "Your satisfaction drives our innovation.",
  };

  return (
    <div className="w-full min-h-screen bg-[#FAF5FF] lg:px-60 flex flex-col items-center">
      {/* Top Bar */}
      <div className="bg-white rounded-lg p-2 border w-full">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center text-[#333] py-3"
        >
          <AiOutlineArrowLeft className="mr-2 text-xl" />
          About Us
        </button>
      </div>

      {/* About Us Content */}
      <div className="p-2">
        <div className="p-6 w-full rounded-xl shadow-md bg-white">
          {/* Intro Section */}
          <p className="text-sm text-gray-600 leading-6 mb-4">{aboutUsData.intro}</p>

          {/* Dynamic Sections */}
          {aboutUsData.sections.map((section) => (
            <div key={section.id} className="mb-4">
              <h2 className="text-xl font-semibold text-[#555] mb-3">
                {section.title}
              </h2>
              <p className="text-sm text-gray-600 leading-6">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <h2 className="mt-8 flex items-center text-xl font-bold mb-6 text-gray-300 text-center">
        <span className="flex-grow h-px bg-gray-300 mr-4"></span>
        {aboutUsData.footer}
        <span className="flex-grow h-px bg-gray-300 ml-4"></span>
      </h2>
    </div>
  );
};

export default AboutUs;
