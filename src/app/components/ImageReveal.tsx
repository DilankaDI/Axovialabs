"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "inset(100% 0% 0% 0%)", // hidden from bottom
        },
        {
          clipPath: "inset(0% 0% 0% 0%)", // fully visible
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-black"
    >
      <div
        ref={imageRef}
        className="w-[80%] h-[70vh] overflow-hidden rounded-2xl"
      >
        <Image
          src="/images/your-image.jpg" // 👈 put your image here
          alt="Reveal"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}