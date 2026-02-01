import vines from "@/assets/vines.png";
import Image from "../ui/Image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const FifthPage = () => {
  const el = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top center",
          trigger: el.current,
        },
      })
      .fromTo(
        el.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el.current,
          },
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.5,
        },
      );
  });
  return (
    <section className="w-full">
      <div ref={el} className="max-w-7xl mx-auto w-full px-3 py-8">
        <Image
          src={vines}
          alt={"Vines Image"}
          className="rounded-[40px] w-full h-auto max-w-full"
        />
      </div>
    </section>
  );
};

export default FifthPage;
