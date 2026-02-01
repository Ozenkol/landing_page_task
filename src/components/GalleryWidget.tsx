import Image from "../ui/Image";

import firstPic from "@assets/first.jpg";
import secondPic from "@assets/second.png";
import Card from "./Card";

const GalleryWidget = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto w-full px-3 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-5 gap-6">
          <div className="row-span-5">
            <Image
              src={firstPic}
              className="w-full min-h-100 max-h-100 object-cover transition-transform duration-300 hover:scale-110 rounded-[40px] p-1"
              alt="Gallery Widget"
            />
          </div>
          <div className="col-span-1 md:col-span-2 row-span-5">
            <Card className="rounded-[40px] bg-yellow-300 p-2">
              <Image
                src={secondPic}
                className="w-full min-h-100 max-h-100 object-cover transition-transform duration-300 hover:scale-110 rounded-[20px]"
                alt="Gallery Widget"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryWidget;
