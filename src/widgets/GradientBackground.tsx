import React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
  imageUrl?: string;
  className?: string;
}

// Default gradient background image
import defaultGradientImage from "@/assets/images/gradient_background.png";

export default function GradientBackground({
  children,
  imageUrl = defaultGradientImage,
  className = "",
}: GradientBackgroundProps) {
  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden ${className} mt-6 rounded-t-[48px]`}
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          filter: "brightness(0.8)",
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
