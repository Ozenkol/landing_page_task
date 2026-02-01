// DynamicCrop.jsx - SIMPLE VERSION
import Image from "@/ui/Image";
import phoneWithHand from "@/assets/images/phone_with_hand.png";
import VideoPlayer from "@/ui/VideoPlayer";

type ScreenRect = {
  left: number; // percent (0-100)
  top: number; // percent (0-100)
  width: number; // percent (0-100)
  height: number; // percent (0-100)
};

type DynamicCropProps = {
  /** optional video src to overlay on the phone screen */
  videoSrc?: string;
  /** optional className for the video to tune its size/position */
  videoClassName?: string;
  /** optional explicit rectangle (percent values) to place the video inside the phone artwork */
  screenRect?: ScreenRect;
};

const DynamicCrop = ({
  videoSrc,
  videoClassName,
  screenRect,
}: DynamicCropProps) => {
  const overlayStyle: React.CSSProperties | undefined =
    videoSrc && screenRect
      ? {
          position: "absolute",
          left: `${screenRect.left}%`,
          top: `${screenRect.top}%`,
          width: `${screenRect.width}%`,
          height: `${screenRect.height}%`,
        }
      : undefined;

  return (
    <div className="relative w-full aspect-9/16 sm:aspect-3/4 md:aspect-video overflow-hidden rounded-xl">
      {/*
        Background phone image: make it absolutely positioned and use object-cover + object-center.
        This guarantees the visible crop area is always centered regardless of container size.
      */}
      <Image
        src={phoneWithHand}
        alt="Cropped phone image"
        className="absolute inset-0 m-auto min-w-full min-h-full object-cover object-center"
      />

      {/*
        Optional video overlay that sits centered inside the phone area.
        By default it uses a sensible width/height so it visually aligns with a phone screen.
        The wrapper is pointer-events-none so clicks fall through unless the video itself needs interaction;
        in that case pass a videoClassName that sets pointer-events-auto.
      */}
      {videoSrc &&
        // If screenRect is provided, use absolute positioning with percentages.
        // Otherwise fall back to a centered box with reasonable defaults.
        (overlayStyle ? (
          <div
            style={overlayStyle}
            className="rounded-lg overflow-hidden pointer-events-auto"
          >
            <VideoPlayer
              src={videoSrc}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className={
                videoClassName ||
                "w-[62%] h-[64%] rounded-lg overflow-hidden pointer-events-auto"
              }
            >
              <VideoPlayer
                src={videoSrc}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default DynamicCrop;
