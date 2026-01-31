import signPic from "@/assets/sign.png";
import bagPic from "@/assets/bag.png";
import Image from "../ui/Image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SixthPage = () => {
  const firstPic = useRef(null);
  const secondPic = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top top",
          trigger: firstPic.current,
        },
      })
      .fromTo(
        firstPic.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: firstPic.current,
          },
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.5,
        },
      )
      .fromTo(
        secondPic.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: secondPic.current,
          },
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.5,
        },
      );
  }, []);
  return (
    <div className="flex flex-row items-center justify-between">
      <Image
        src={bagPic}
        className="w-[800px] h-[800px] rounded-[40px]"
        alt="Sixth Page Bag"
        ref={firstPic}
      />

      <Image
        src={signPic}
        className="w-[800px] h-[800px] rounded-[40px]"
        alt="Sixth Page Foreground"
        ref={secondPic}
      />
    </div>
  );
};

export default SixthPage;
