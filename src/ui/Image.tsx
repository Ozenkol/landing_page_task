import { forwardRef } from "react";

const Image = forwardRef<
  HTMLImageElement,
  { src: string; alt: string; className?: string }
>((props, ref) => {
  const { src, alt, className } = props;
  return <img src={src} alt={alt} className={className} ref={ref} />;
});
export default Image;
