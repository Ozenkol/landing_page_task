import signPic from "@/assets/images/sign.png";
import bagPic from "@/assets/images/bag.png";
import Image from "@/ui/Image";
import { useEffect, useRef } from "react";
import useScrollable from "@/hooks/useScrollable";

const MerchWidget = () => {
  const firstPic = useRef(null);
  const secondPic = useRef(null);
  useScrollable(firstPic);
  useScrollable(secondPic);
  return (
    <section className="w-full">
      <div className="max-w-screen mx-0 w-full px-0 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <Image
          src={bagPic}
          className="w-full md:w-1/2 min-h-[80vh] max-h-[80vh] rounded-[20px] object-cover"
          alt="Sixth Page Bag"
          ref={firstPic}
        />

        <Image
          src={signPic}
          className="w-full md:w-1/2 min-h-[80vh] max-h-[80vh] rounded-[20px] object-fit"
          alt="Sixth Page Foreground"
          ref={secondPic}
        />
      </div>
    </section>
  );
};

export default MerchWidget;
