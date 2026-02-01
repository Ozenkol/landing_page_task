import Image from "../ui/Image";

import afisha from "@assets/afisha.png";
import desert from "@assets/desert.png";
import Card from "./Card";
import Paragraph from "../ui/Paragraph";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CommunityWidget = () => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top center",
          trigger: firstRef.current,
        },
      })
      .fromTo(
        firstRef.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: firstRef.current,
          },
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.5,
        },
      )
      .fromTo(
        secondRef.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: secondRef.current,
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
      <div className="max-w-7xl mx-auto w-full px-3 py-8 space-y-8">
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          ref={firstRef}
        >
          <Image
            src={afisha}
            className="rounded-[40px] w-full md:w-1/2"
            alt="Community Widget"
          />
          <Card className="mt-4 rounded-[40px] w-full md:w-1/2">
            <Paragraph>
              Отдельным направлением стала работа с комьюнити. Мы не просто
              анонсировали мероприятия, а выстраивали вокруг Steppe Coffee точки
              притяжения. За период сотрудничества были восстановлены связи с
              уже существующими сообществами и привлечены новые – SpacED,
              Language Mixer, Bookclub Almaty. В кофейне прошёл
              арт-мастер-класс, который усилил офлайн-трафик и стал контентной
              опорой для социальных сетей. Такой формат позволил бренду выйти за
              рамки «кофейни» и закрепиться как городское пространство для
              встреч и идей.
            </Paragraph>
          </Card>
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          ref={secondRef}
        >
          <Card className="rounded-[40px] w-full md:w-1/2">
            <Paragraph>
              Дополнительно мы занимались дизайном печатных материалов и
              оформлением интерьера, чтобы визуальный язык бренда был
              последовательно представлен и в цифровой среде, и в физическом
              пространстве. Это усилило узнаваемость и связало коммуникацию в
              соцсетях с реальным опытом гостей.
            </Paragraph>
          </Card>
          <Image
            src={desert}
            className="rounded-[40px] w-full md:w-1/2 object-cover"
            alt="Community Widget"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityWidget;
