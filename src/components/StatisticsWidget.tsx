import Paragraph from "../ui/Paragraph";
import Card from "./Card";
import ViewsGraph from "./ViewGraph";
import Image from "../ui/Image";

import phone from "@assets/phone.png";

const StatisticsWidget = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <div className="col-span-2">
        <Card>
          <Paragraph>
            В рамках SMM мы выстроили регулярное присутствие бренда в Instagram
            и TikTok, переработали подачу контента и сделали акцент на живые
            форматы. В сентябре, несмотря на просадку охватов относительно
            предыдущего периода, нам удалось сохранить активность аудитории и
            зафиксировать рост подписчиков на 9% по сравнению с августом. Этот
            этап стал диагностическим: мы протестировали форматы и выявили, что
            наибольшую вовлеченность дают визуальные посты и контент с
            офлайн-жизнью кофейни .
          </Paragraph>
        </Card>
      </div>
      <div className="col-span-2 row-span-2 col-start-1 row-start-2">
        <ViewsGraph />
      </div>
      <div className="row-span-3 col-start-3 row-start-1">
        <Image
          src={phone}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          alt="Statistics Widget"
        />
      </div>
    </div>
  );
};

export default StatisticsWidget;
