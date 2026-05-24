"use client";
import Image from "next/image";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-h-[768px] pt-16">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-20"
        >
          {/* Text */}
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="text-center lg:text-left flex-1 px-6 text-white mb-8 lg:mb-0">
              <div className="text-lg font-bangers uppercase tracking-[0.03em] mb-2">
                The Best Pizza in town
              </div>
              <h1 className="text-6xl lg:text-8xl font-bangers drop-shadow-md">
                Pizza Perfection <br /> in every bite.
              </h1>
            </div>
          </MouseParallaxChild>

          {/* Image & Floating Elements */}
          <MouseParallaxChild factorX={0.2} factorY={0.1} className="relative flex-1 px-6">
            {/* Main Pizza Image */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="/pizza-banner.png"
                alt="Pizza"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>

            {/* Floating Items */}
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-6 left-4 hidden xl:flex"
            >
              <Image src="/chilli-1.png" width={90} height={90} alt="" priority />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-10 -left-4 hidden xl:flex"
            >
              <Image src="/chilli-2.png" width={100} height={84} alt="" priority />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.3}
              factorY={0.3}
              className="absolute top-56 -left-4 hidden xl:flex"
            >
              <Image src="/leaves.png" width={120} height={84} alt="" priority />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.3}
              factorY={0.4}
              className="absolute bottom-20 -left-20 hidden xl:flex"
            >
              <Image src="/olives.png" width={100} height={84} alt="" priority />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className="absolute bottom-8 left-12 hidden xl:flex"
            >
              <Image src="/mushrooms.png" width={80} height={84} alt="" priority />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
