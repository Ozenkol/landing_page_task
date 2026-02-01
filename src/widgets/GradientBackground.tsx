import React from "react";

interface GradientBackgroundProps {
  children: React.ReactNode;
  /** Image URL to use for the background. Defaults to the bundled gradient image. */
  imageUrl?: string;
  /** Optional container className */
  className?: string;
  /** Rotation in degrees applied to the background image. Positive is clockwise. */
  rotationDeg?: number;
  /** Scale applied to the background image. 1 = original size. Values >1 enlarge. */
  scale?: number;
  /** Translate offsets (can be percentages like '-10%' or px values) applied before rotate/scale. */
  offsetX?: string;
  offsetY?: string;
  /** How the image should fit inside the box (object-fit). Defaults to 'cover'. */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Optional CSS filter string to apply to the image (e.g. 'brightness(0.8) contrast(1.1)'). */
  filter?: string;
  /** Optional width/height for the image element (use percentages like '120%').
   * Using >100% helps ensure coverage after rotation. */
  imgWidth?: string;
  imgHeight?: string;
}

// Default gradient background image (use alias path)
import defaultGradientImage from "@/assets/images/gradient_background.png";

/**
 * GradientBackground
 * Replaces the simple background-image div with an absolutely positioned <img>
 * that can be rotated/scaled/translated reliably. The image is centered in the
 * container and clipped by overflow:hidden so rotation doesn't create scrollbars.
 */
export default function GradientBackground({
  children,
  imageUrl = defaultGradientImage,
  className = "",
  rotationDeg = 0,
  scale = 1,
  offsetX = "0%",
  offsetY = "0%",
  objectFit = "cover",
  filter = "brightness(0.8)",
  imgWidth = "120%",
  imgHeight = "120%",
}: GradientBackgroundProps) {
  // Decide whether we need an inline transform. If the caller only wants the
  // default centered placement (no rotation/scale/offset), prefer Tailwind
  // classes (-translate-x-1/2 -translate-y-1/2) so the markup stays utility-first.
  const needsInlineTransform =
    rotationDeg !== 0 || scale !== 1 || offsetX !== "0%" || offsetY !== "0%";

  // Map objectFit to a Tailwind utility when possible.
  const objectFitClass =
    objectFit === "cover"
      ? "object-cover"
      : objectFit === "contain"
        ? "object-contain"
        : objectFit === "fill"
          ? "object-fill"
          : objectFit === "none"
            ? "object-none"
            : "object-scale-down";

  const baseImgClass = [
    "absolute",
    "left-1/2",
    "top-1/2",
    "pointer-events-none",
    "select-none",
    "transform",
    objectFitClass,
    "filter",
  ]
    .concat(
      needsInlineTransform ? [] : ["-translate-x-1/2", "-translate-y-1/2"],
    )
    .join(" ");

  const inlineStyle: React.CSSProperties = {
    width: imgWidth,
    height: imgHeight,
    // prefer Tailwind object-* classes for fit; the style fallback keeps types safe
    objectFit,
    filter,
  };

  if (needsInlineTransform) {
    inlineStyle.transform = `translate(-50%,-50%) translate(${offsetX}, ${offsetY}) rotate(${rotationDeg}deg) scale(${scale})`;
  }

  return (
    <div
      className={`relative w-full min-h-screen overflow-hidden ${className} mt-6 rounded-t-[48px]`}
      style={{
        minHeight: "100vh",
      }}
    >
      {/* Background Image as an <img> so we can rotate/scale/position reliably. */}
      <img
        src={imageUrl}
        alt="Background"
        aria-hidden
        className={baseImgClass}
        style={inlineStyle}
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
