import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../assets/Notification_1.png";
import Notification2 from "../assets/Notification_2.png";

function Verify() {
  const navigate = useNavigate();

  const handleTurnOnNotification = async () => {
    // Check if the Notification API is supported
    if (!("Notification" in window)) {
      alert("Your browser does not support notifications.");
      return;
    }

    try {
      // Request permission for notifications
      const permission = await window.Notification.requestPermission();
      if (permission === "granted") {
        // Display a test notification
        new window.Notification("Welcome to OneMenu", {
          body: "Enjoy every meal with us!",
          icon: "https://i.pinimg.com/736x/13/a8/f5/13a8f5cd0deed9f4d5a54da69b641440.jpg", // Replace with your logo
        });
      } else if (permission === "denied") {
        alert("You have denied notifications. Please enable them in your browser settings.");
      } else {
        alert("Notification permission was dismissed.");
      }
    } catch (err) {
      console.error("Error requesting notification permission:", err);
      alert("An error occurred while requesting notifications.");
    }

    // Navigate to /home after handling notifications
    navigate("/home");
  };

  return (
    <div className="w-full h-screen px-5 flex flex-col items-center justify-center">
      {/* Images */}
      <img className="-mt-10 w-66 h-auto" src={Notification} alt="Notification Illustration 1" />
      <img className="mt-4 w-66 h-auto" src={Notification2} alt="Notification Illustration 2" />

      {/* Title */}
      <h1 className="text-center mt-12 font-extrabold text-gray-500">
        Never Miss a Delicious Moment!
      </h1>

      {/* Turn On Notifications Button */}
      <button onClick={handleTurnOnNotification}
        className="bg-black mt-4 w-full text-gray-200 py-3 px-8 rounded-xl font-extrabold hover:bg-[#FF7043] transition-all">
        Turn On Notifications
      </button>

      {/* Not Now Button */}
      <button
        onClick={() => navigate("/home")}
        className=" text-gray-800 py-3 px-8 rounded-3xl font-bold transition-all">
        Not Now
      </button>

        {/* Ensure the body and HTML do not overflow */}
        <style>
        {`
          body, html {
            height: 100%;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}

export default Verify;
