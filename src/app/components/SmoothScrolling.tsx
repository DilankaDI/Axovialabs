"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Minimal Lenis setup
    const lenis = new Lenis({
      duration: 1.2,             // scroll duration
      easing: (t: number) => t,  // linear easing
      lerp: 0.08                  // optional, smooth interpolation
    });

    // Sync GSAP ticker with Lenis
    lenis.on("scroll", () => gsap.ticker.tick());

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}