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
      className={`font-gothic60 text-gothic60 text-gray-800 text-[20px] ${className}`}
    >
      {children}
    </p>
  );
}
