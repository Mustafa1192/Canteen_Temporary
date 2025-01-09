import React, { useState, useEffect } from "react";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { GiGlassCelebration, GiIndiaGate } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();
  const location = useLocation(); // To track the current route

  // Set the active tab when the route changes
  useEffect(() => {
    if (location.pathname === "/home") setActiveTab("home");
    else if (location.pathname === "/cart") setActiveTab("Cart");
    else if (location.pathname === "/huma") setActiveTab("Huma");
    else if (location.pathname === "/frankies") setActiveTab("Frankies");
    else if (location.pathname === "/drinks") setActiveTab("Drinks");
    else if (location.pathname === "/southindian") setActiveTab("SouthIndian");
  }, [location]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-10 md:hidden">
      <div className="flex justify-around items-center py-2">
        {/* Home */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === "home" ? "text-blue-500" : "text-gray-700"}`}
          onClick={() => {
            setActiveTab("home");
            navigate("/home");
          }}
        >
          <AiFillHome size={24} />
          <span className="text-sm">Home</span>
        </div>        

        {/* Huma */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === "Huma" ? "text-blue-500" : "text-gray-700"}`}
          onClick={() => {
            setActiveTab("Huma");
            navigate("/huma");
          }}
        >
          <MdCategory size={24} />
          <span className="text-sm">Huma</span>
        </div>

        {/* Frankies */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === "Frankies" ? "text-blue-500" : "text-gray-700"}`}
          onClick={() => {
            setActiveTab("Frankies");
            navigate("/frankies");
          }}
        >
          <FaPizzaSlice size={24} />
          <span className="text-sm">Frankies</span>
        </div>

        {/* Drinks */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === "Drinks" ? "text-blue-500" : "text-gray-700"}`}
          onClick={() => {
            setActiveTab("Drinks");
            navigate("/drinks");
          }}
        >
          <GiGlassCelebration size={24} />
          <span className="text-sm">Drinks</span>
        </div>

        {/* South Indian Food */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === "SouthIndian" ? "text-blue-500" : "text-gray-700"}`}
          onClick={() => {
            setActiveTab("SouthIndian");
            navigate("/southindian");
          }}
        >
          <GiIndiaGate size={24} />
          <span className="text-sm">South Indian</span>
        </div>

        {/* Cart */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeTab === "Cart" ? "text-blue-500" : "text-gray-700"}`}
          onClick={() => {
            setActiveTab("Cart");
            navigate("/cart");
          }}
        >
          <AiOutlineShoppingCart size={24} />
          <span className="text-sm">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
