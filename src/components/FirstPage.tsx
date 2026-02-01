import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import steppeCoffeeImage from "../assets/steppecoffe.png";

interface FirstPageProps {
  children?: React.ReactNode;
}

export default function FirstPage({ children }: FirstPageProps) {
  const el = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        duration: 2.5,
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: el.current,
        },
      },
      {
        opacity: 1,
        ease: "power2.inOut",
        duration: 2.5,
      },
    );
  });

  return (
    <section className="relative w-full min-h-screen bg-[#FAF100] flex flex-col rounded-b-[48px]">
      <div className="max-w-screen mx-0 px-3 py-1 md:py-3">{children}</div>
      <div className="flex-1 flex items-center justify-center px-3 py-6">
        <img
          ref={el}
          src={steppeCoffeeImage}
          alt="Steppe Coffee"
          className="w-full h-auto max-w-[320px] sm:max-w-[420px] md:max-w-[640px] lg:max-w-[840px]"
        />
      </div>
    </section>
  );
}
