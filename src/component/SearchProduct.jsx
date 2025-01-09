import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Importing all product data
import freshJuiceProducts from "./data/FreshJuice";
import foodItemsProducts from "./data/FoodItems";
import frankiesProducts from "./data/Frankies";
import southIndianProducts from "./data/SouthIndian";

const ProductPage = () => {
  const { searchTerm } = useParams(); // Get search term from URL
  const [cartPopup, setCartPopup] = useState(false); // State for cart popup
  const [addedProduct, setAddedProduct] = useState(null); // Store the last added product

  // Combine all imported product data into a single array
  const allProducts = [
    ...freshJuiceProducts,
    ...foodItemsProducts,
    ...frankiesProducts,
    ...southIndianProducts,
  ];

  // Ensure searchTerm is always a string or empty string if undefined or null
  const term = searchTerm ? searchTerm.toLowerCase() : "";

  // Filter products based on the search term
  const filteredProducts = allProducts.filter(
    (product) => product.name && product.name.toLowerCase().includes(term)
  );

  // Load cart data from localStorage
  const loadCartData = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  // Save cart data to localStorage
  const saveCartData = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  // Handle Add to Cart action
  const handleAddToCart = (product) => {
    // Get current cart items from localStorage
    const cart = loadCartData();
  
    // Check if the product already exists in the cart
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex >= 0) {
      // If the product exists, increase its quantity
      cart[existingItemIndex].quantity += 1;
    } else {
      // If the product does not exist, add it to the cart with a quantity of 1
      cart.push({ ...product, quantity: 1 });
    }
  
    // Save updated cart to localStorage
    saveCartData(cart);
  
    // Set the last added product and show popup
    setAddedProduct(product);
    setCartPopup(true);
  
    // Hide popup after 3 seconds
    setTimeout(() => setCartPopup(false), 3000);
  
    console.log("Added to cart:", product);
  };
  
  

  return (
    <div className="product-page h-screen bg-[#FAF5FF]">
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 px-4 pb-4 w-full">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative rounded-lg py-4 transition-all duration-200"
            >
              {/* Image with 'Add' Button */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-2 right-2 text-sm bg-green-500 text-white py-1 px-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
                >
                  ADD
                </button>
              </div>

              {/* Product Details */}
              <div className="mt-3 px-2">
                <h3 className="font-bold text-gray-800 line-clamp-2">{product.title}</h3>

                {/* Rating */}
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-3 h-3 ${
                        index < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600">{product.description}</p>

                {/* Price */}
                <div className="flex items-center justify-between mt-2">
                  <span className="text-green-600 font-bold">
                    &#8377; {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="pt-36">
          <img
            src="https://i.pinimg.com/736x/bd/4a/f3/bd4af38f240c3c57835adfd3e826450b.jpg"
            alt="No results"
            className="py-4 px-32"
          />
        </div>
      )}
      {/* Cart Popup */}
{cartPopup && addedProduct && (
  <a href="/cart">
    <div className="fixed bottom-16 left-0 w-full flex justify-center z-50">
      <div className="flex items-center w-full mx-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img
            src={addedProduct.image}
            alt="Product"
            className="w-8 h-8 rounded-xl mr-3"
          />
          <span>Added to cart!</span>
        </div>
        
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-white ml-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.707 5.707a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-2.879-2.879a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  </a>
)}


      {/* No More Results */}
      <h2 className="flex items-center text-xl font-bold mb-6 text-gray-300 text-center px-8">
        <span className="flex-grow h-px bg-gray-300 mr-4"></span>
        No More Results
        <span className="flex-grow h-px bg-gray-300 ml-4"></span>
      </h2>
    </div>
  );
};

export default ProductPage;
