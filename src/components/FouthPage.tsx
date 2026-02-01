import Image from "../ui/Image";

import phoneWithHand from "@assets/phone_with_hand.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Paragraph from "../ui/Paragraph";
import Card from "./Card";

import livingRoom from "@assets/livingroom.png";
import { useEffect, useRef } from "react";
import VideoOverlay from "../feature/VideoOverlay";

const FouthPage = () => {
  const el = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top top",
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
  }, []);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 md:mx-12 items-start"
      ref={el}
    >
      <div className="md:col-span-1 w-full">
        <VideoOverlay />
      </div>
      <div className="md:col-span-2 flex flex-col gap-6 w-full">
        <Card>
          <Paragraph>
            Steppe Coffee – городской кофейный проект с сильным
            комьюнити-потенциалом и фокусом на живое общение. В рамках первого
            этапа мы пересобрали визуальный язык бренда, усилили характер и
            атмосферу Steppe Coffee, а также заложили единую логику для
            дальнейшего развития контента и коммуникаций. Это позволило бренду
            выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
          </Paragraph>
        </Card>

        <Card>
          <Paragraph>
            Steppe Coffee – городской кофейный проект с сильным
            комьюнити-потенциалом и фокусом на живое общение. В рамках первого
            этапа мы пересобрали визуальный язык бренда, усилили характер и
            атмосферу Steppe Coffee, а также заложили единую логику для
            дальнейшего развития контента и коммуникаций. Это позволило бренду
            выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
          </Paragraph>
        </Card>

        <div>
          <Image
            src={livingRoom}
            alt={"Living Room Image"}
            className="rounded-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FouthPage;
