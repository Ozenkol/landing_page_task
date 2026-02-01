import vines from "@/assets/images/vines.png";
import Image from "@/ui/Image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollable from "@/hooks/useScrollable";
gsap.registerPlugin(ScrollTrigger);
const HeroImageWidget = () => {
  const el = useRef(null);
  useScrollable(el);
  return (
    <section className="w-full">
      <div ref={el} className="max-w-screen mx-0 w-full">
        <Image
          src={vines}
          alt={"Vines Image"}
          className="rounded-[40px] w-full h-auto max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroImageWidget;
