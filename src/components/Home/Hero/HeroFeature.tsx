import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Livraison gratuite",
    description: "Pour toute commande de 200",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Retour 1 & 1",
    description: "Annulation après 1 jour",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Paiements 100% sécurisés",
    description: "Garantir des paiements sécurisés",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Support dédié 24/7",
    description: "Partout et à tout moment",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5  mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-white">{item.title}</h3>
              <p className="text-sm text-gray-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
