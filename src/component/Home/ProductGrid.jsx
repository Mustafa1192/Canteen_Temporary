import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/TopSelling";

const ProductGrid = () => {
  const [addedToCartState, setAddedToCartState] = useState({});
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null); // To store the added product
  const navigate = useNavigate();

  // Load cart data from localStorage
  const loadCartData = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return storedCart;
  };

  // Save cart data to localStorage
  const saveCartData = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  // Handle Add to Cart action
  const handleAddToCart = (product) => {
    const currentCart = loadCartData();
    const existingItem = currentCart.find((item) => item.id === product.id);

    if (existingItem) {
      // Update quantity if the product already exists in the cart
      existingItem.quantity += 1;
    } else {
      // Add the new product with a default quantity of 1
      currentCart.push({ ...product, quantity: 1 });
    }

    // Save updated cart to localStorage
    saveCartData(currentCart);

    // Update the "addedToCart" state for the specific product
    setAddedToCartState((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    // Set the product to show in the popup
    setAddedProduct(product);

    // Show the "View Cart" popup and hide it after 5 seconds
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 5000); // Hide after 5 seconds
  };

  return (
    <div className="py-5 shadow-md rounded-lg">
      <h2 className="flex items-center text-xl font-bold mb-6 text-gray-300 text-center">
        <span className="flex-grow h-px bg-gray-300 mr-4"></span>
        Top Selling Items
        <span className="flex-grow h-px bg-gray-300 ml-4"></span>
      </h2>
      <div className="grid grid-cols-3 gap-4 px-4 pb-4">
        {products.slice(0, 3).map((product) => (
          <div key={product.id} className="relative">
            {/* Image with 'Add' Button */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 md:h-96 object-cover rounded-md"
              />
              <button
                onClick={() => handleAddToCart(product)}
                className="absolute bottom-2 right-2 text-sm bg-green-500 text-white py-1 px-2 rounded-lg shadow-lg hover:bg-green-600 transition duration-200"
              >
                ADD
              </button>
            </div>

             {/* Product Details */}
          <div className="mt-3">
            <h3 className="font-bold text-gray-800 line-clamp-2">
              {product.title}
            </h3>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-3 h-3 ${
                    index < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-green-600 font-bold">&#8377; {product.price}</span>
            </div>
          </div>

          </div>
        ))}
      </div>

      {/* View Cart Pop-Up with Fade-up Animation */}
      {showCartPopup && (
      <a href="cart">
      <div className="fixed bottom-16 left-0 w-full flex justify-center z-50 animate-fadeUp md:px-64">
        <div className="flex items-center w-full mx-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition">
          {/* Product Image and Text on the Left */}
          <div className="flex items-center">
            <img
              src={addedProduct?.image} // Display image of the added product
              alt="Product"
              className="w-8 h-8 rounded-xl mr-3"
            />
            <span>added to cart!</span>
          </div>
          
          {/* Arrow Icon on the Right */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white ml-auto"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
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
    </div>
  );
};

export default ProductGrid;
