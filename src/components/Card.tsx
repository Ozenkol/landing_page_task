import React, { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", ...props }, ref) => {
    const elementRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      // Select the element inside the scope
      const targetElement = elementRef.current;

      if (!targetElement) return;

      // Create a timeline that plays/reverses on mouse events
      const tl = gsap.timeline({ paused: true });

      tl.to(targetElement, {
        scale: 1.05,
        duration: 1,
        ease: "power2.out",
      });

      // Add listeners using React's event system
      targetElement.addEventListener("mouseover", () => tl.play());
      targetElement.addEventListener("mouseout", () => tl.reverse());

      // Cleanup happens automatically with useGSAP when the component unmounts
    }); // Scopes the animation to the container

    return (
      <div
        ref={ref || elementRef}
        className={`relative bg-transparent rounded-[20px] border border-white shadow-[0px_4px_140.7px_0px_#C0C7F7] backdrop-blur-0 py-6 md:py-[60px] px-4 md:px-[24px] ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export default Card;
