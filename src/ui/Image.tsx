import { forwardRef } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  /** If true, image fills its container (w-full h-full object-cover). Useful when placed inside aspect boxes */
  fill?: boolean;
};

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { src, alt, className = "", style, fill = false } = props;
  const baseClass = fill ? "w-full h-full object-cover" : "w-full h-auto";
  return (
    <img
      src={src}
      alt={alt}
      className={`${baseClass} ${className}`}
      style={style}
      ref={ref}
    />
  );
});

export default Image;
