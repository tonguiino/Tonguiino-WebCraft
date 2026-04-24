import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRevealOnScroll = (elementRef, options = {}) => {
  useGSAP(
    () => {
      // Determine the target: if a selector is provided, dynamically gather all matching children within the ref.
      const target = options.selector 
          ? gsap.utils.toArray(options.selector, elementRef.current) 
          : elementRef.current;

      // Use fromTo to strictly define start and end states, preventing StrictMode state recording deadlocks.
      gsap.fromTo(target, 
        {
          y: options.y !== undefined ? options.y : 100,
          x: options.x !== undefined ? options.x : 0,
          scale: options.scale !== undefined ? options.scale : 1,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          scale: 1,
          opacity: 1,
          duration: options.duration || 1,
          ease: options.ease || "power3.out",
          stagger: options.stagger || 0,
          scrollTrigger: {
            trigger: elementRef.current,
            start: options.start || "top 75%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    },
    { scope: elementRef },
  );
};
