"use client"
import React, { useState, useEffect } from "react";
// import Link from "next/link";
import {Button} from "./ui/button";
export default function Navbar() {
  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-center py-2 bg-transparent z-50 animate-shake-slow">
      <div className="rounded-3xl w-full max-w-5xl flex justify-between items-center py-8 px-8 bg-yellow-400 bg-opacity-10 backdrop-filter backdrop-blur-xl dark border-b border-white border-opacity-20">
        
          <Button
            onClick={toggleTheme}
            className=" dark:bg-black text-white  rounded-full p-2 ml-4 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </div>
    </div>
  );
}
