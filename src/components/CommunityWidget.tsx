import Image from "../ui/Image";

import afisha from "@assets/afisha.png";
import Card from "./Card";
import Paragraph from "../ui/Paragraph";

const CommunityWidget = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 px-4 md:px-12">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={afisha}
          className="rounded-[40px] m-12 w-1/2"
          alt="Community Widget"
        />
        <Card className="mt-4 rounded-[40px]">
          <Paragraph>
            Отдельным направлением стала работа с комьюнити. Мы не просто
            анонсировали мероприятия, а выстраивали вокруг Steppe Coffee точки
            притяжения. За период сотрудничества были восстановлены связи с уже
            существующими сообществами и привлечены новые – SpacED, Language
            Mixer, Bookclub Almaty. В кофейне прошёл арт-мастер-класс, который
            усилил офлайн-трафик и стал контентной опорой для социальных сетей.
            Такой формат позволил бренду выйти за рамки «кофейни» и закрепиться
            как городское пространство для встреч и идей.
          </Paragraph>
        </Card>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Card className="rounded-[40px]">
          <Paragraph>
            Дополнительно мы занимались дизайном печатных материалов и
            оформлением интерьера, чтобы визуальный язык бренда был
            последовательно представлен и в цифровой среде, и в физическом
            пространстве. Это усилило узнаваемость и связало коммуникацию в
            соцсетях с реальным опытом гостей.
          </Paragraph>
        </Card>
        <Image
          src={afisha}
          className="rounded-[40px] m-12 w-1/2"
          alt="Community Widget"
        />
      </div>
    </div>
  );
};

export default CommunityWidget;
