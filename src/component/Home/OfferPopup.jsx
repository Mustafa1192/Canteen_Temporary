import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const offers = [
    {
      id: 1,
      title: "Priority Service",
      description: "Say goodbye to long wait times!",
      img: "https://i.pinimg.com/736x/e8/83/f6/e883f69fe9bdabcf9d8b3acc42ba6ac4.jpg",
      bgColor: "#fff",
    },
    {
      id: 2,
      title: "Exclusive Updates",
      description: "Be the first to know!",
      img: "https://i.pinimg.com/736x/7c/5a/70/7c5a70cd6f88a0392e74abdfa6d4a811.jpg",
      bgColor: "#fff",
    },
    {
      id: 3,
      title: "Early Event Access",
      description: "Get Early Access to special offers!",
      img: "https://i.pinimg.com/736x/e6/e9/4a/e6e94a6281740978138ea60a3ca370d9.jpg",
      bgColor: "#fff",
    },
  ];

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("offerPopupShown", "true"); // Mark as shown
  };

  useEffect(() => {
    const hasPopupBeenShown = localStorage.getItem("offerPopupShown");
    if (!hasPopupBeenShown) {
      setIsVisible(true); // Show only if it hasn’t been shown before
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 w-full bg-transparent z-50"
      initial={{ opacity: 0, y: 50 }} // Start from invisible and lower position
      animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.5 }} // Smooth fade-up animation
    >
      {/* Popup Container */}
      <div className="relative bg-green-400 rounded-t-3xl p-6">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-[-40px] right-4 bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        {/* Header with Logo and Benefit Text */}
        <div className="flex items-center justify-center relative mb-6">
          <div className="rounded-full w-16 h-16 absolute top-[-46px]">
            <img
              src="https://i.pinimg.com/736x/13/a8/f5/13a8f5cd0deed9f4d5a54da69b641440.jpg"
              alt="Logo"
              className="w-16 h-16 object-cover rounded-full mx-auto"
            />
          </div>
          <h2 className="text-black text-xl mt-5 font-bold">OneMenu Benefit</h2>
        </div>

        {/* Offers Section */}
        <div className="space-y-4">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="flex items-center gap-4 px-4 rounded-lg"
              style={{ backgroundColor: offer.bgColor }}
            >
              <img
                src={offer.img}
                alt={offer.title}
                className="h-16 p-2 object-cover rounded-full"
              />
              <div className="flex-1 text-black">
                <p className="font-bold">{offer.title}</p>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="text-center mt-6">
          <button onClick={handleClose} className="bg-[#FFA726] text-white w-full py-4 px-8 rounded-xl font-bold">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OfferPopup;
