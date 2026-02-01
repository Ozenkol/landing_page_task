import storePic from "@/assets/images/store.png";
import Image from "@/ui/Image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

const LastPage = () => {
  const el = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top 80%",
          trigger: el.current,
        },
      })
      .fromTo(
        el.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
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
      <div className="max-w-screen mx-auto w-full p-0">
        <Image
          src={storePic}
          alt={"Last Page Image"}
          className="rounded-[40px] w-full h-auto"
          ref={el}
        />
      </div>
    </section>
  );
};

export default LastPage;
