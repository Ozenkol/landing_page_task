import Heading from "@/ui/Heading";
import Card from "@/ui/Card";
import Image from "@/ui/Image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import before from "@assets/before.png";
import after from "@assets/after.png";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ThirdPage = () => {
  const beforeRef = useRef(null);
  const afterRef = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        start: "bottom top",
        scrollTrigger: {
          trigger: beforeRef.current,
        },
      })
      .fromTo(
        beforeRef.current,
        {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.5,
        },
      )
      .fromTo(
        afterRef.current,
        {
          opacity: 0,
          duration: 2.5,
          ease: "power2.inOut",
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 2.5,
        },
      );
  }, []);
  return (
    <section className="w-full mx-0">
      <div className="max-w-8xl mx-auto w-full px-3 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center"
          ref={beforeRef}
        >
          <Heading type="h2" className="mb-4">
            ДО
          </Heading>
          <Card className="w-full">
            <Image src={before} alt={"Our Mission Image"} />
          </Card>
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center"
          ref={afterRef}
        >
          <Heading type="h2" className="mb-4">
            ПОСЛЕ
          </Heading>
          <Card className="w-full">
            <Image src={after} alt={"Our Mission Image After"} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThirdPage;
