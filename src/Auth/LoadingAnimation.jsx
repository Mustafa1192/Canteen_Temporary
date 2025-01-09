import React, { useEffect, useState } from "react";

const AppWelcome = ({ onFinish }) => {
  const [fadeUp, setFadeUp] = useState(false);

  useEffect(() => {
    // Trigger fade-up animation on load
    const fadeTimer = setTimeout(() => setFadeUp(true), 500);

    // Trigger instant disappearance after 3 seconds
    const finishTimer = setTimeout(() => onFinish(), 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      {/* Logo/Image and Welcome Text */}
      <div
        className={`flex flex-col items-center transition-all duration-1000 ${
          fadeUp ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* <img
          src="/logo.png" // Replace with your logo/image path
          alt="Logo"
          className="w-32 h-32"
        /> */}
        <h1 className="text-warm-orange text-6xl font-extrabold">OneMenu</h1>
        <h1 className="text-gray-700 text-4xl md:text-6xl font-bold mt-2">
          Welcome
        </h1>
      </div>
    </div>
  );
};

export default AppWelcome;
