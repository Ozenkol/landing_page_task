import Image from "../ui/Image";

import phoneWithHand from "@assets/phone_with_hand.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Paragraph from "../ui/Paragraph";
import Card from "./Card";

import livingRoom from "@assets/livingroom.png";
import { useEffect, useRef } from "react";

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
    <div className="grid grid-cols-3 grid-rows-4 gap-4 mx-12" ref={el}>
      <div className="row-span-4">
        <Image src={phoneWithHand} alt={"Phone with Hand Image"}></Image>
      </div>
      <div className="col-span-2">
        <Card className="m-auto">
          <Paragraph>
            Steppe Coffee – городской кофейный проект с сильным
            комьюнити-потенциалом и фокусом на живое общение. В рамках первого
            этапа мы пересобрали визуальный язык бренда, усилили характер и
            атмосферу Steppe Coffee, а также заложили единую логику для
            дальнейшего развития контента и коммуникаций. Это позволило бренду
            выглядеть цельно и узнаваемо во всех точках контакта с аудиторией.
          </Paragraph>
        </Card>
      </div>
      <div className="col-span-2 col-start-2 row-start-2">
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
      </div>
      <div className="col-span-2 row-span-2 col-start-2 row-start-3">
        <Image src={livingRoom} alt={"Living Room Image"}></Image>
      </div>
    </div>
  );
};

export default FouthPage;
