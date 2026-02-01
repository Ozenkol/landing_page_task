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
    <section className="w-full">
      <div className="max-w-screen mx-0 w-full px-0 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <Image
          src={bagPic}
          className="w-full md:w-1/2 min-h-[80vh] max-h-[80vh] rounded-[20px] object-cover"
          alt="Sixth Page Bag"
          ref={firstPic}
        />

        <Image
          src={signPic}
          className="w-full md:w-1/2 min-h-[80vh] max-h-[80vh] rounded-[20px] object-fit"
          alt="Sixth Page Foreground"
          ref={secondPic}
        />
      </div>
    </section>
  );
};

export default SixthPage;
