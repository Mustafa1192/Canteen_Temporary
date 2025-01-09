import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const Orders = () => {
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated 3-second loading
    setTimeout(() => {
      const storedOrderData = JSON.parse(localStorage.getItem("orderData")) || {
        items: [{ title: "SOMIC G951s", quantity: 1, price: 36.54 }],
        totalPrice: 43.54,
        date: new Date(),
        payment: "**** **** **** 0709",
        shippingAddress: "3891 Ranchview Dr. Richardson, California 62639",
        tax: 5,
        shippingFee: 2,
      };
      setOrderData(storedOrderData);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50 py-5 lg:px-60">
      {loading ? (
        <div className="flex flex-col items-center">
          <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
          <p className="mt-4 font-semibold">Loading your order...</p>
        </div>
      ) : (
        orderData && (
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
            {/* Header */}
            <div className="border-b pb-4 mb-4">
              <h1 className="text-2xl font-bold text-gray-800">Order confirmed!</h1>
              <p className="text-gray-600 mt-1">
                <span className="font-semibold">Hello User,</span> <br />
                Your order has been confirmed and will be shipping the next day.
                <br />
                Thanks for your order!
              </p>
            </div>

            {/* Order Details */}
            <div className="space-y-4">
              {/* Item Section */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="https://i.pinimg.com/736x/86/22/34/86223498ce2b18ed55919a8838ca156b.jpg" // Replace with real image
                    alt="Product"
                    className="w-16 h-16 rounded"
                  />
                  {/* Working */}
                   <div className="ml-4 ">
                    {orderData.items.map((item, index) => (
                      <div key={index} className="flex justify-between gap-56">
                        <span className="font-semibold text-gray-800">{item.title} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="mt-4 font-semibold">Total: ${orderData.totalPrice.toFixed(2)}</div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex justify-center my-4">
                <QRCode value={`OrderID: ${orderData.date}`} size={128} />
              </div>

              {/* Payment and Address */}
              <div className="border-t pt-4 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Payment: Online</span>
                </p>
              </div>

              {/* Price Summary */}
              <div className="border-t pt-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span>${orderData.items[0].price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Discount:</span>
                  <span>${orderData.tax}</span>
                </div>
                <div className="flex justify-between font-bold text-gray-800 text-lg mt-2">
                  <span>Total:</span>
                  <span>${orderData.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-6 text-center">
              <a href="/orderhistory"><button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition">
                Manage Your Order
              </button></a>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Orders;
