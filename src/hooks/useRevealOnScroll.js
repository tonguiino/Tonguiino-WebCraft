import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRevealOnScroll = (elementRef) => {
  useGSAP(
    () => {
      gsap.from(elementRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: elementRef },
  );
};
