import { useEffect, useRef } from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import VideoPlayer from "../ui/VideoPlayer";
import Card from "./Card";

import videoUrl from "@assets/IMG_6657.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const SecondPage = () => {
  const el = useRef(null);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
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
      <div className="max-w-7xl mx-auto w-full px-3 py-8 md:py-14 flex flex-col md:flex-row items-center gap-8">
        <Card ref={el} className="w-full md:w-1/2">
          <Heading type="h4" className="mb-2 mt-4">
            STEPPE COFFEE
          </Heading>
          <Paragraph>
            Steppe Coffee – городской кофейный проект с сильным
            комьюнити-потенциалом и фокусом на живое общение. В рамках первого
            этапа мы пересобрали визуальный язык бренда, усилили характер и
            атмосферу Steppe Coffee, а также заложили единую логику для
            дальнейшего развития контента и коммуникаций. Это позволило бренду
            выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
          </Paragraph>
        </Card>
        <VideoPlayer
          src={videoUrl}
          className="rounded-[20px] w-full md:w-1/2"
        />
      </div>
    </section>
  );
};

export default SecondPage;
