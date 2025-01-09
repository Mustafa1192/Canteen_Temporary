import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductTable = () => {
  const [foods, setFoods] = useState([]); // State to store food data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to handle errors

  const API_BASE_URL = "http://localhost:5000/api/foods"; // Your API URL

  // Fetch data from API
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get(API_BASE_URL); // Make the API request
        setFoods(response.data); // Set the response data
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch food data");
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Product Inventory</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 p-2">Image</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Description</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">
                  <img
                    src={food.img}
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="border border-gray-300 p-2">{food.name}</td>
                <td className="border border-gray-300 p-2 text-sm text-gray-600">
                  {food.desc || "N/A"}
                </td>
                <td className="border border-gray-300 p-2 text-lg font-semibold">
                  ₹{food.price}
                </td>
                <td className="border border-gray-300 p-2">{food.type || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
