import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../component/BottomNav";
import Header from "../component/Header";


export default function MainLayout() {

  return (
    <div className="lg:px-60">
      <Header />
      <Outlet />
      <BottomNav />
    </div>
  );
}
