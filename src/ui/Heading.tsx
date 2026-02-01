interface HeadingProps {
  type?: "h4" | "h2";
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, type = "h4", className = "" }: HeadingProps) => {
  if (type === "h2") {
    return (
      <h2
        className={`text-3xl md:text-5xl lg:text-[64px] font-normal text-[#393939] font-gothic ${className}`}
      >
        {children}
      </h2>
    );
  }
  return (
    <h4
      className={`text-2xl md:text-4xl lg:text-[40px] font-normal text-[#393939] font-gothic ${className}`}
    >
      {children}
    </h4>
  );
};

export default Heading;
