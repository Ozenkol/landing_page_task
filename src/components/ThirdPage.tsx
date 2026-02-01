import Heading from "../ui/Heading";
import Card from "./Card";
import Image from "../ui/Image";
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
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen mx-auto gap-8 md:gap-20 px-6 md:px-16">
      <div
        className="w-full md:w-auto flex flex-col justify-center items-center"
        ref={beforeRef}
      >
        <Heading type="h2" className="mb-4">
          ДО
        </Heading>
        <Card className="w-full md:w-auto">
          <Image src={before} alt={"Our Mission Image"}></Image>
        </Card>
      </div>
      <div
        className="w-full md:w-auto flex flex-col justify-center items-center"
        ref={afterRef}
      >
        <Heading type="h2" className="mb-4">
          ПОСЛЕ
        </Heading>
        <Card className="w-full md:w-auto">
          <Image src={after} alt={"Our Mission Image After"}></Image>
        </Card>
      </div>
    </div>
  );
};

export default ThirdPage;
