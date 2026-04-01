"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(sections, {
        yPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: "+=3000",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Panel 1 */}
      <div className="panel h-screen flex flex-col items-center justify-center bg-black text-white">
        <h2 className="text-6xl font-bold mb-4">We Build Software</h2>
        <p className="text-lg opacity-70">Modern, scalable solutions</p>
      </div>

      {/* Panel 2 */}
      <div className="panel h-screen flex flex-col items-center justify-center bg-linear-to-br from-purple-700 to-black text-white">
        <h2 className="text-6xl font-bold mb-4">Scalable Systems</h2>
        <p className="text-lg opacity-70">Built for growth</p>
      </div>

      {/* Panel 3 */}
      <div className="panel h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-700 to-black text-white">
        <h2 className="text-6xl font-bold mb-4">Stunning UI/UX</h2>
        <p className="text-lg opacity-70">Design that converts</p>
      </div>

      {/* Panel 4 */}
      <div className="panel h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h2 className="text-6xl font-bold mb-4">Let’s Build Together 🚀</h2>
        <p className="text-lg opacity-70">Start your project today</p>
      </div>
    </section>
  );
}