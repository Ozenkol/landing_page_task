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
    <Card className="m-16 p-12" ref={el}>
      <Heading type="h2">ИТОГИ</Heading>
      <Paragraph className="mt-6">
        Итог работы с Steppe Coffee: Социальные сети стали отражением жизни
        кофейни, офлайн-мероприятия начали работать как инструмент привлечения и
        удержания аудитории, а бренд получил понятную и устойчивую
        коммуникационную модель, которую можно масштабировать дальше.
      </Paragraph>
    </Card>
  );
};

export default ResultPage;
