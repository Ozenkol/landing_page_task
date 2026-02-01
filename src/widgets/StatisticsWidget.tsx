import Paragraph from "@/ui/Paragraph";
import Card from "@/ui/Card";
import ViewsGraph from "@/feature/ViewGraph";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sangwanimation from "@/assets/videos/sangwanimation3.mp4";
import phone from "@/assets/images/phone.png";
import VideoOverlay from "@/feature/VideoOverlay";
import Heading from "@/ui/Heading";
import useScrollable from "@/hooks/useScrollable";
gsap.registerPlugin(ScrollTrigger);

const StatisticsWidget = () => {
  const el = useRef(null);
  useScrollable(el);
  return (
    <section className="w-full" ref={el}>
      <div className="max-w-7xl mx-auto w-full px-3 py-8">
        {/* Use flex-column on small screens, grid on md+ so mobile stacks and desktop keeps the grid layout */}
        <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-3 gap-4">
          <div className="col-span-2">
            <Card className="rounded-[40px] p-2">
              <Paragraph>
                В рамках SMM мы выстроили регулярное присутствие бренда в
                Instagram и TikTok, переработали подачу контента и сделали
                акцент на живые форматы. В сентябре, несмотря на просадку
                охватов относительно предыдущего периода, нам удалось сохранить
                активность аудитории и зафиксировать рост подписчиков на 9% по
                сравнению с августом. Этот этап стал диагностическим: мы
                протестировали форматы и выявили, что наибольшую вовлеченность
                дают визуальные посты и контент с офлайн-жизнью кофейни .
              </Paragraph>
            </Card>
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-2">
            <ViewsGraph />
          </div>
          <div className="row-span-3 col-start-3 row-start-1">
            <VideoOverlay
              src={sangwanimation}
              imageSrc={phone}
              screenRect={{ left: 11, top: 5, width: 79, height: 85 }}
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full px-3 py-8 flex flex-col md:flex-row items-center gap-8">
        <Card className="rounded-[40px] p-2">
          <Heading type="h4" className="mb-2 mt-4">
            В ОКТЯБРЕ
          </Heading>
          <Paragraph>
            Мы усилили стратегию и сместили фокус в сторону Reels и сторис, а
            также более плотной связки онлайна и офлайна. Результат – резкий
            рост ключевых метрик: охваты аккаунта выросли на 125,3%, действия в
            профиле – на 6,3%, посещения профиля – на 8,4%. Прирост подписчиков
            за месяц составил почти 12% по сравнению с концом сентября. Это
            подтвердило, что выбранная модель контента и темп публикаций начали
            работать системно .
          </Paragraph>
        </Card>
        <ViewsGraph
          totalViews="80,123"
          reachedAccounts="5,430"
          dateRange="1 окт - 31 окт"
          reachedAccountsChangePercent="+147.8%"
        />
      </div>
    </section>
  );
};

export default StatisticsWidget;
