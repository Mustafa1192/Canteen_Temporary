import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  { id: "Huma", title: "Food Item", description: "Delicious meals for all", img: "https://i.pinimg.com/736x/29/95/b9/2995b92744ac2e6312c2037eb099632f.jpg" },
  { id: "frankies", title: "Frankie & Roll", description: "Delicious rolls & frankies", img: "https://i.pinimg.com/736x/86/c6/e3/86c6e30adbbd2fd698c49015c4d52ee5.jpg" },
  { id: "southindian", title: "Shree Sai Dosa... ", description: "Authentic dosa varieties", img: "https://i.pinimg.com/736x/33/b8/de/33b8dec6813b43fc1f0a74174cfa3a1d.jpg" },
  { id: "drinks", title: "Fresh Juice", description: "Refreshing & healthy juices", img: "https://i.pinimg.com/736x/a0/2f/8f/a02f8f90a0e11f0164a7b6fbdeb3de7d.jpg" }
];

const CategoryList = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCategoryClick = (categoryId) => {
    // Navigate to a page based on category ID
    navigate(`/${categoryId}`);
  };

  return (
    <div className="p-5 rounded-lg">
      <h2 className="flex items-center text-xl font-bold mb-6 text-gray-300 text-center">
        <span className="flex-grow h-px bg-gray-300 mr-4"></span>
        Explore
        <span className="flex-grow h-px bg-gray-300 ml-4"></span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative bg-white rounded-lg shadow-lg p-4 hover:shadow-lg transition-all duration-200 cursor-pointer"
            onClick={() => handleCategoryClick(category.id)} // Handle category click
          >
            {/* Title & Description */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 truncate">{category.title}</h3>
              <p className="text-sm max-w-24 text-gray-600">{category.description}</p>
            </div>

            {/* Image */}
            <img
              src={category.img}
              alt={category.title}
              className="absolute bottom-2 right-2 w-16 h-16 object-cover rounded-full"
            />
          </div>
        ))}
      </div>

      {/* Additional Image */}
      <div className="mt-4">
        <img
          src="https://i.pinimg.com/736x/7f/78/49/7f784913a8aa9cb5e7da750289fdc54e.jpg" alt="Promotional Banner"
          className="w-full rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default CategoryList;
