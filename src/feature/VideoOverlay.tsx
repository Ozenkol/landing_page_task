import phoneWithHand from "../assets/phone_with_hand.png";
import syrupfinn from "../assets/syrupfinn2.mp4";
import Image from "../ui/Image";

const VideoOverlay = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={phoneWithHand}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
      />

      {/* Video Player */}
      <div className="absolute inset-0 flex items-center justify-center p-[11%] md:p-[12%]">
        <div className="absolute top-[12%] left-[7%] right-[7%] bottom-[12%] inset-0 flex items-center justify-center">
          <video
            className="w-4/5 max-w-4xl rounded-lg shadow-2xl"
            controls
            autoPlay
            muted
            loop
          >
            <source src={syrupfinn} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay;
