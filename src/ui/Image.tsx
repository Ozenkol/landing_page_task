import { forwardRef } from "react";

const Image = forwardRef<
  HTMLImageElement,
  { src: string; alt: string; className?: string }
>((props, ref) => {
  const { src, alt, className = "" } = props;
  // default to responsive image sizing; allow overrides via className
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto ${className}`}
      ref={ref}
    />
  );
});
export default Image;
