"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // useMotionValueEvent(scrollYProgress, 'change', (value) => {
  //   console.log(value);
  // })

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      className="h-[492px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(230,126,34,.2)_15%,rgb(247,220,111,.2)_25%,transparent_100%)]"></div>

      {/* Start Planet */}
      <div className="absolute size-64 md:size-96 bg-orange-700 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(247,220,111)_37.7%,rgb(230,126,34))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(247,220,111)]"></div>
      {/* End Planet */}

      {/* Start Ring 1 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute size-[364px] md:size-[600px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 top-1/2 left-full  bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-5 top-0 left-1/2 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center ">
          <div className="size-2 bg-white rounded full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}

      {/* Start Ring 2 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "-1turn",
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute size-[444px] md:size-[780px] top-1/2 left-1/2 border border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 border-dashed"
      ></motion.div>
      {/* End Ring 2 */}

      {/* Start Ring 3 */}
      <motion.div
        style={{
          translateY: "-50%",
          translateX: "-50%",
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute size-[544px] md:size-[980px] top-1/2 left-1/2 border border-white opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 border-dashed"
      >
        <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute size-2 top-1/2 left-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* End Ring 3 */}

      <div className="container relative mt-16">
        <h1 className="text-7xl md:text-[118px] md:leading-none text-center font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(210,126,60,.5))] text-transparent bg-clip-text">
          RXA DEV
        </h1>
        <p className="text-lg md:text-xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          Maximize your business potential with digital solutions, where smart
          technology meets user-friendly design.
        </p>
        <div className="flex justify-center mt-5 pt-10">
          <Button>Book a Session</Button>
        </div>
      </div>
    </motion.section>
  );
};
