"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-10 py-4">

        {/* LOGO */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-white">Axovia</span>
          <span className="text-[#c08457]">Labs</span>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-[#c08457] transition">Home</a>
          <a href="#" className="hover:text-[#c08457] transition">About</a>
          <a href="#" className="hover:text-[#c08457] transition">Services</a>
          <a href="#" className="hover:text-[#c08457] transition">Blog</a>
          <a href="#" className="hover:text-[#c08457] transition">Contact</a>
        </nav>

        {/* SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center bg-[#c08457] rounded-md cursor-pointer hover:bg-[#a36b45] transition">
            <FaFacebookF size={14} />
          </div>

          <div className="w-9 h-9 flex items-center justify-center bg-[#c08457] rounded-md cursor-pointer hover:bg-[#a36b45] transition">
            <FaXTwitter size={14} />
          </div>

          <div className="w-9 h-9 flex items-center justify-center bg-[#c08457] rounded-md cursor-pointer hover:bg-[#a36b45] transition">
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </header>
  );
}