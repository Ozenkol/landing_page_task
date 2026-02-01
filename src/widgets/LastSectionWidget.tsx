import storePic from "@/assets/images/store.png";
import Image from "@/ui/Image";
import { useRef, useEffect } from "react";
import useScrollable from "@/hooks/useScrollable";

const LastSectionWidget = () => {
  const el = useRef(null);
  useScrollable(el);
  return (
    <section className="w-full" ref={el}>
      <div className="max-w-screen mx-auto w-full p-0">
        <Image
          src={storePic}
          alt={"Last Page Image"}
          className="rounded-[40px] w-full h-auto"
          ref={el}
        />
      </div>
    </section>
  );
};

export default LastSectionWidget;
