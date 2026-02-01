import React from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({
  children,
  className = "",
}: ParagraphProps) {
  return (
    <p
      className={`font-ginger text-gray-800 text-base md:text-lg ${className}`}
    >
      {children}
    </p>
  );
}
