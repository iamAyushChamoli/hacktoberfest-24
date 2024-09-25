import { useEffect, useState } from "react";
import { useSprings, animated } from "@react-spring/web";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const createSprings = (count) => {
  return useSprings(count, (index) => ({
    from: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
    to: async (next) => {
      while (true) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        await next({
          x,
          y,
          config: { duration: 10000 }, // Lazy Susan speed
        });
      }
    },
  }));
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);
  const [springs, api] = createSprings(20);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      api.start((index) => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [api]);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {springs.map((spring, index) => (
          <animated.div
            key={index}
            style={spring}
            className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom"
          >
            <div
              className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </animated.div>
        ))}
      </MouseParallax>
    </div>
  );
};