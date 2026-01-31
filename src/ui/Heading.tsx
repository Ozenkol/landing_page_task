interface HeadingProps {
  type?: "h4" | "h2";
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, type = "h4", className = "" }: HeadingProps) => {
  if (type === "h2") {
    return (
      <h2
        className={`text-[64px] font-normal text-[#393939] font-gothic60 ${className}`}
      >
        {children}
      </h2>
    );
  }
  return (
    <h4
      className={`text-[40px] font-normal text-[#393939] font-gothic60 ${className}`}
    >
      {children}
    </h4>
  );
};

export default Heading;
