import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../component/BottomNav";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from localStorage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cartData);
  }, []);

  const handleQuantityChange = (index, type) => {
    const updatedItems = [...cartItems];

    if (type === "increase") {
      updatedItems[index].quantity += 1;
    } else if (type === "decrease") {
      if (updatedItems[index].quantity > 1) {
        updatedItems[index].quantity -= 1;
      } else {
        // If quantity becomes 0, remove the item
        updatedItems.splice(index, 1);
      }
    }

    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems)); // Update localStorage
  };

  const handleAddItems = () => {
    // Redirect user to the home or product listing page
    navigate("/home");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Calculate GST (2%)
  const gst = (totalPrice * 0.02).toFixed(2);  // 2% GST
  const totalWithGST = (totalPrice + parseFloat(gst)).toFixed(2);

  useEffect(() => {
    // Dynamically load the Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

// Handle payment and store order with payment status
const handlePayment = () => {
  const options = {
    key: "rzp_test_34L84Hf6UuzELW", // Razorpay Key ID (Test key)
    amount: totalWithGST * 100, // Amount in paise (₹totalWithGST * 100)
    currency: "INR",
    name: "OneMenu",
    description: "Test Transaction",
    image: "https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/payment3.jpg",
    handler: function (response) {
      alert("Payment successful! Payment ID: " + response.razorpay_payment_id);

      // Create order object to store in localStorage
      const order = {
        orderId: response.razorpay_payment_id,
        paymentStatus: "Success", // Add paymentStatus
        items: cartItems, // Include cart items in the order
        totalAmount: totalWithGST,
        date: new Date().toISOString(),
      };

      // Fetch existing past orders or initialize an empty array
      const existingPastOrders = JSON.parse(localStorage.getItem("pastOrders")) || [];

      // Push the new order to past orders
      existingPastOrders.push(order);

      // Save the updated past orders back to localStorage
      localStorage.setItem("pastOrders", JSON.stringify(existingPastOrders));

      // Clear the cart from localStorage and reset cart items
      localStorage.removeItem("cart");
      setCartItems([]);

      // Redirect user to the home page
      navigate("/home");
    },
    prefill: {
      name: "Furqan Ansari",
      email: "22bit16@aiktc.ac.in",
      contact: "7045992766",
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#F37254",
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
};


  return (
    <div className={`container lg:px-60 mx-auto p-4 ${cartItems.length === 0 ? "h-full" : "h-auto"} flex flex-col md:px-80`}>
      {/* Title */}
      <h1 className="text-lg font-bold mb-4">
        {cartItems.length === 0 ? "Add Items Here" : "Review your Order"}
      </h1>

      {/* Cart Items */}
      <div className={`flex-grow ${cartItems.length === 0 ? "overflow-hidden" : "overflow-y-auto"}`}>
        {cartItems.length === 0 ? (
          <h1 className="pt-8 text-lg text-center font-extrabold">
            Your cart is getting lonely. <br />
            <span className="font-thin text-sm py-2">Fill up with all things good!</span>
          </h1>
        ) : (
          <div className="border rounded-lg p-4 shadow-lg bg-white mb-48">
            {/* Delivery Info */}
            <div className="flex justify-between items-center border-b pb-2">
              <span className="text-sm font-medium text-gray-600">
                Ready in <span className="font-bold">10 Mins</span>
                <span className="ml-2 text-green-500">⚡ Superfast</span>
              </span>
              <span className="text-sm text-gray-600">
                {cartItems.length} item{cartItems.length > 1 ? "s" : ""}
              </span>
            </div>

            {/* Product Details */}
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between mt-4 border-b pb-2">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <span className="text-sm text-gray-600">&#x20B9; {item.price}</span>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(index, "decrease")}
                    className="border p-1 px-2 rounded text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="mx-2 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(index, "increase")}
                    className="border p-1 px-2 rounded text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            {/* Add More Button */}
            <div className="mt-4 flex justify-between items-center">
              <a href="/home">
                <button className="border text-black text-xs py-1 px-2 rounded">
                  Add More
                </button>
              </a>
              <div className="text-lg font-bold text-green-600">
                ₹{totalPrice}
              </div>
            </div>   

            {/* Bill Summary */}
            <div className="mt-8 bg-white rounded-lg">
              <h2 className="text-xl font-semibold">Bill Summary</h2>
              <div className="flex justify-between items-center mt-4 text-sm text-red-600">
                <span>To Pay</span>
                <div className="text-lg font-bold">₹{totalPrice}</div>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                <span>GST (2%)</span>
                <div className="text-lg font-bold">₹{gst}</div>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-green-600">
                <span>Total (Including GST)</span>
                <div className="text-lg font-bold">₹{totalWithGST}</div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div>
              <h2 className="flex items-center text-xl font-bold mt-4 text-gray-300 text-center">
                <span className="flex-grow h-px bg-gray-300 mr-4"></span>
                Cancellation Policy
                <span className="flex-grow h-px bg-gray-300 ml-4"></span>
              </h2>
              <p className="text-xs text-center font-bold text-red-400 mt-2">
                *Orders cannot be cancelled or refunded after payment.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-14 md:bottom-0 left-0 w-full bg-white p-4 border shadow-lg md:px-64">
        <h1 className="p-2 text-lg font-bold">
          {cartItems.length === 0 ? "Add Some Delicious Items!" : "Almost There"}
        </h1>
        <button
          onClick={cartItems.length === 0 ? handleAddItems : handlePayment}
          className="bg-green-500 text-white w-full py-3 rounded-lg shadow-md text-xl"
        >
          {cartItems.length === 0 ? "Add Items" : "Proceed to Pay"}
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Cart;
