import { Link } from "react-router";
import useProductStore from "../productStore";
import { useState } from "react";
import Nav from "./Nav";
import "./header.css";

function Header() {
  return (
    <header className="sticky bg-[#333] top-0 z-[20] mx-auto p-4 flex flex-wrap w-full items-center justify-between">
      
        <Link to="/" className="text-xl font-bold text-[#FAFAFA]!"><h1>TheShop</h1></Link>
        < Nav />
      
    </header>
  ) 
}

export default Header;
