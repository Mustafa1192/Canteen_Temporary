import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaSearch, FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai"; // Import back arrow icon
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Header = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");  // State for search query
  const placeholderItems = ["Samosa Pav", "Wada Pav", "Cutlet", "Pepsi", "Rice"];
  const navigate = useNavigate();  // Get navigate function from react-router

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholderItems.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission or pressing Enter
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery.toLowerCase()}`); // Navigate to product page based on search
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-b from-[#a7c6ff] via-[#FAF5FF] to-[#FAF5FF] px-4 py-3">
      <div className="items-center">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-3">
            {/* Back Arrow Button - Visible only on desktop */}
            <button 
              onClick={() => navigate("/home")} 
              className="hidden lg:block text-gray-600 hover:text-gray-800">
              <AiOutlineArrowLeft size={20} />
            </button>

            <FaMapMarkerAlt size={20} className="text-blue-500" />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">AIKTC</h1>
              <p className="text-sm text-gray-500 truncate">
                {`Anjuman-I-Islam Kalsekar`.substring(0, 15)}...
              </p>
            </div>
          </div>

          {/* Profile Icon */}
          <div>
            <a href="/profile"><FaUserCircle size={28} className="text-gray-600 cursor-pointer" /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">      
          {/* Search Bar */}
          <div className="relative flex items-center w-full mt-4">
            <FaSearch size={18} className="absolute left-3 text-gray-400" />
            <form onSubmit={handleSearchSubmit} className="w-full">
              <input
                type="text"
                value={searchQuery}  // Bind value to searchQuery
                onChange={handleSearch}  // Update searchQuery on change
                placeholder={`Search for "${placeholderItems[placeholderIndex]}"`}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 box-border"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
