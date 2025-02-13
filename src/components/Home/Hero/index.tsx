import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden h-full pb-10 lg:pb-12.5 xl:pb-20 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[#2D3091]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-12">
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex flex-col gap-14">
                  <div>
                    <h1 className="max-w-[153px] font-semibold text-dark text-xl sm:text-3xl mb-3">
                      Messages prédéfinis
                    </h1>
                  </div>
                  <div>
                    <p>
                      Envoi de mises à jour pour signaler son état.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
                <div className="flex flex-col gap-14">
                  <div>
                    <h1 className="max-w-[153px] font-semibold text-dark text-xl sm:text-3xl mb-3">
                      Suivi en temps réel
                    </h1>
                  </div>
                  <div>
                    <p>
                      Position accessible sur une carte interactive pour rassurer les proches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
