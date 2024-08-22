"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import { useRef } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab: (typeof tabs)[number]) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const handleTabHover = () => {
    dotLottieRef.current?.seek(0);
    dotLottieRef.current?.play();
  };

  return (
    <div
      onMouseEnter={handleTabHover}
      className="border border-white/15 flex p-2.5 gap-2.5 rounded-xl items-center lg:flex-1"
    >
      <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className="size-5"
          autoplay
          // loop
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#e99d2c] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Elevate your business with profit driven solutions.
        </h2>
        <p className="text-white/70 text-lg md:text-xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, we develop innovative
          solutions tailored to your unique needs.
        </p>
        <div className="mt-10 flex flex-col gap-3 lg:flex-row">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="border border-white/30 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
          {/* <Image src={productImage} alt="Product Image" /> */}
        </div>
      </div>
    </section>
  );
};
