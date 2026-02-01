import Image from "../ui/Image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Paragraph from "../ui/Paragraph";
import Card from "./Card";

import livingRoom from "@assets/livingroom.png";
import { useEffect, useRef } from "react";
import VideoOverlay from "../feature/VideoOverlay";
import sampleVideo from "@assets/syrupfinn2.mp4";

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
    <section className="w-full" ref={el}>
      <div className="max-w-7xl mx-auto w-full px-3 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-1 w-full">
          <VideoOverlay
            src={sampleVideo}
            screenRect={{ left: 25, top: 16, width: 57, height: 65 }}
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-6 w-full">
          <Card>
            <Paragraph>
              После завершения этого этапа клиент перешел на пакет Cycle –
              формат ежемесячного сопровождения, в рамках которого мы продолжаем
              развивать проект, усиливать комьюнити и последовательно
              масштабировать коммуникацию на базе обновленного визуального и
              смыслового фундамента.
            </Paragraph>
          </Card>

          <Card>
            <Paragraph>
              Мы взяли на себя работу с контентом, визуальной подачей, печатными
              материалами и офлайн-активностями, а также участвовали в
              оформлении интерьера кофейни, чтобы пространство и коммуникация
              работали как единое целое.
            </Paragraph>
          </Card>

          <div className="rounded-[40px] overflow-hidden w-full">
            <Image src={livingRoom} alt={"Living Room Image"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FouthPage;
