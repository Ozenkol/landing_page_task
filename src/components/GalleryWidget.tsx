import Image from "../ui/Image";

import firstPic from "@assets/first.jpg";
import secondPic from "@assets/second.png";
import Card from "./Card";

const GalleryWidget = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-5 mx-6">
      <div className="row-span-5 m-3">
        <Image
          src={firstPic}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 rounded-[40px]"
          alt="Gallery Widget"
        />
      </div>
      <div className="col-span-2 row-span-5 m-3">
        <Card className="rounded-[40px] bg-yellow-300">
          <Image
            src={secondPic}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110 "
            alt="Gallery Widget"
          />
        </Card>
      </div>
    </div>
  );
};

export default GalleryWidget;
