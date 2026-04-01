"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
// import Image from "next/image";

export default function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Text animation
    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Image animation
    gsap.from(imageRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
      ease: "power3.out",
    });

    // Rotating ring
    gsap.to(ringRef.current, {
      rotate: 360,
      duration: 12,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section className="relative h-screen bg-[#0a0a0a] text-white flex items-center px-20 overflow-hidden">
      
      {/* LEFT CONTENT */}
      <div ref={textRef} className="w-1/2 space-y-6 z-10">
        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight tracking-tight">
          We Build Scalable <br />
          Software & Web <br />
          Solutions
        </h1>

        <p className="text-gray-400 max-w-md text-lg">
          From powerful applications to modern websites, we create digital experiences that grow with your business.
        </p>

        <button className="bg-[#c08457] px-7 py-3 rounded-lg font-semibold hover:bg-[#a36b45] transition">
          Contact Us →
        </button>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-1/2 flex justify-center items-center relative">
        
        {/* Glow background */}
        <div className="absolute w-[400px] h-[400px] 
        bg-[radial-gradient(circle,rgba(255,140,0,0.35)_0%,transparent_70%)] 
        blur-3xl"></div>

        {/* Rotating ring */}
        <div
          ref={ringRef}
          className="absolute w-[300px] h-[300px] rounded-full border-[14px] border-[#f59e0b] opacity-80"
        ></div>

        {/* Image */}
        {/* <div
          ref={imageRef}
          className="relative w-[680px] h-[680px]"
        >
          <Image
            src="/Images/metahuman.png" // 👈 replace with your image
            alt="Hero"
            fill
            className="object-cover"
            priority
          />
        </div> */}
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-1/2 w-6 h-6 border border-gray-600 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 border border-gray-600 rounded-full opacity-20"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce text-sm">
        Scroll Down ↓
      </div>
    </section>
  );
}