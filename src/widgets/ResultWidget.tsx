import { useEffect, useRef } from "react";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import Card from "@/ui/Card";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useScrollable from "@/hooks/useScrollable";
gsap.registerPlugin(ScrollTrigger);

const ResultWidget = () => {
  const el = useRef(null);

  useScrollable(el);
  return (
    <section className="w-full" ref={el}>
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

export default ResultWidget;
