import { useEffect, useRef } from "react";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Card from "./Card";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ResultPage = () => {
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
      <div className="max-w-5xl mx-auto w-full px-3 py-8">
        <Card className="mx-0 md:mx-8 p-4 md:p-8" ref={el}>
          <Heading type="h2" className="text-center">
            ИТОГИ
          </Heading>
          <Paragraph className="mt-6 text-center">
            Итог работы с Steppe Coffee: Социальные сети стали отражением жизни
            кофейни, офлайн-мероприятия начали работать как инструмент
            привлечения и удержания аудитории, а бренд получил понятную и
            устойчивую коммуникационную модель, которую можно масштабировать
            дальше.
          </Paragraph>
        </Card>
      </div>
    </section>
  );
};

export default ResultPage;
