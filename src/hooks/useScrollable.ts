import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useScrollable = (el: React.RefObject<null>) => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          start: "top center",
          trigger: el.current,
        },
      })
      .fromTo(
        el.current,
        {
          duration: 1.5,
          opacity: 0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el.current,
          },
        },
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.5,
        },
      );
  }, []);
};

export default useScrollable;
