import { useRef, useState } from "react";
import Image from "../ui/Image";
import phoneWithHand from "@/assets/phone_with_hand.png";

type ScreenRect = {
  left: number; // percent
  top: number; // percent
  width: number; // percent
  height: number; // percent
};

type VideoOverlayProps = {
  src: string;
  imageSrc?: string;
  poster?: string;
  /** optional rectangle in percent to position the video inside the phone artwork */
  screenRect?: ScreenRect;
  /** optional className applied to the video element */
  className?: string;
};

export default function VideoOverlay({
  src,
  imageSrc,
  poster,
  screenRect,
  className = "",
}: VideoOverlayProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const overlayStyle: React.CSSProperties | undefined = screenRect
    ? {
        position: "absolute",
        left: `${screenRect.left}%`,
        top: `${screenRect.top}%`,
        width: `${screenRect.width}%`,
        height: `${screenRect.height}%`,
      }
    : undefined;

  const onTogglePlay = async () => {
    if (!videoRef.current) return;
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    } catch {
      // autoplay may be blocked; fall back to setting state so user can click controls
      setPlaying(true);
    }
  };

  return (
    // Keep a mobile-style crop (9:16) at all breakpoints so the phone artwork
    // is cropped like a mobile device even on tablet/desktop and naturally
    // fits the grid column it lives in.
    <div className="relative w-full aspect-9/16 overflow-hidden rounded-[40px]">
      <Image
        src={imageSrc ? imageSrc : phoneWithHand}
        alt="Phone art"
        className="absolute inset-0 m-auto min-w-full min-h-full object-cover object-center"
      />

      {/* video: either positioned by screenRect or centered with sensible defaults */}
      {overlayStyle ? (
        <div
          style={overlayStyle}
          className={`rounded-lg overflow-hidden ${className}`}
        >
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full h-full object-cover"
            playsInline
            controls
          />
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className={`w-[62%] h-[64%] rounded-lg overflow-hidden pointer-events-auto ${className}`}
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              className="w-full h-full object-cover"
              playsInline
              controls
            />
          </div>
        </div>
      )}

      {/* Play button overlay (only visible before playback) */}
      {!playing && (
        <button
          aria-label="Play video"
          onClick={onTogglePlay}
          className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 bg-white/90 text-black rounded-full p-3 shadow-lg hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  );
}
