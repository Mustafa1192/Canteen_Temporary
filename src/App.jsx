import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingAnimation from "./Auth/LoadingAnimation";
import AppAuth from "./Auth/AppAuth";
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Verification from "./Auth/Verification";
import Notification from "./Auth/Notification";
import Forget from "./Auth/Forget";
import Term from "./Auth/TermCondition";
import Policy from "./Auth/PrivacyPolicy";

import Home from "./Pages/Home";
import GeneralFood from "./Pages/HumanCaterers";
import Frankies from "./Pages/FrankiesStall";
import Drinks from "./Pages/FreashTJuice";
import SouthIndian from "./Pages/SSDosaCenter";
import Profile from "./Pages/Profile";

import Cart from "./Logic/Cart";
import Order from "./Logic/Order";
import OrderHistory from "./Logic/OrderHistory";

import AdminPanel from "./dashboard/pages/Dashboard";
import ProductList from "./dashboard/pages/ProductList";

import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";

import NotFound from "./component/Notfound";
import SearchProduct from "./component/SearchProduct";
import About from "./component/About";
import FAQ from "./component/FAQs";

export default function App() {
  // Cart state to store added items
  const [cart, setCart] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItemIndex === -1) {
        return [...prevCart, item];
      } else {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      }
    });
  };

  // Function to delete an item from the cart
  const deleteFromCart = (title) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  // Function to update the quantity of an item in the cart
  const updateQuantity = (title, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Pages (No Navbar/Footer) */}
        <Route element={<AuthLayout />}>
          {showWelcome ? (
            <Route
              path="/"
              element={
                <div className="block md:hidden">
                  <LoadingAnimation onFinish={() => setShowWelcome(false)} />
                </div>
              }
            />
          ) : (
            <Route path="/" element={<AppAuth />} />
          )}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/forget" element={<Forget />} />

          {/* OneMenu Pages */}
          <Route path="/orders" element={<Order />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/term" element={<Term />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                deleteFromCart={deleteFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />

          {/* Dashboard */}
          <Route path="/dashboard" element={<AdminPanel />} />
          <Route path="/add-product" element={<ProductList />} />
          <Route path="/admin" element={<Home />} />
        </Route>

        {/* Main Pages (With BottomNav) */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/huma" element={<GeneralFood />} />
          <Route path="/frankies" element={<Frankies />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/southindian" element={<SouthIndian />} />
          <Route path="/search/:searchTerm" element={<SearchProduct />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}