import React from "react";
import OtherNav from "../components/OtherNav";
import Img1 from "./../assets/services_1.png";
import Img2 from "./../assets/s2-final.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Services() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7],
    ["rotate(45deg)", "rotate(0deg)", "rotate(-45deg)", "rotate(-100deg)"]
  );

  const sections = [
    {
      id:1,
      title: "ADAPTACIÓN DE EMPAQUE",
      description:
        "Traducimos la viabilidad de una idea creativa impactante del diseño al anaquel.",
    },
    {
      id:2,
      title: "ADAPTACIÓN DE EMPAQUE",
      description:
        "Traducimos la viabilidad de una idea creativa impactante del diseño al anaquel.",
    },
    {
      id:3,
      title: "COMUNICACIÓN GRÁFICA POP Y OOH",
      description:
        "Aseguramos la iconicidad de la marca y la claridad del mensaje en todos sus puntos de contacto.",
    },
    {
      id:4,
      title: "GESTIÓN DE MARCA EN PROCESOS DE ETIQUETADO",
      description:
        "Lideramos el proceso desde diseño hasta producción. Nos aseguramos de cumplir con los requisitos de calidad en los mejores tiempos.",
    },
    {
      id:5,
      title: "COORDINACIÓN FOTOGRÁFICA",
      description:
        "Maximizamos el potencial de un master graphic a través del photo shooting.",
    },
  ];

  const iconOpacity = (start, middle, end) =>
    useTransform(scrollYProgress, [start, middle, end], ["0%", "100%", "0%"]);

  const iconTranslateY = (start, middle, end, value) =>
    useTransform(
      scrollYProgress,
      [start, middle, end],
      [`0%`, `${value}vh`, "0%"]
    );

  const iconDisplay = (start, middle, end) =>
    useTransform(
      scrollYProgress,
      [start, middle, end],
      ["none", "block", "none"]
    );

  return (
    <div
      id="service"
      className="h-[300vh] bg-[#E4E3DB] m-0 p-0 flex flex-col relative"
      ref={targetRef}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-transparent pl-0 ml-0">
        <div className="h-full mt-20 flex justify-between items-center  pl-0 ml-0 ">
          <div className="w-1/2 flex h-full items-center relative">
            <img
              src={Img1}
              className="h-full z-[5] w-full"
              alt="Image1"
            />
            <motion.img
              style={{ transform: rotate }}
              src={Img2}
              className="absolute left-[25%]"
              alt="Image2"
            />
          </div>
          <div className="bg-transparent w-1/2 flex flex-col justify-start relative gap-6">
            <div className="sticky r-0 w-auto flex flex-col items-end px-6 md:px-20 gap-1">
              <p className="z-50 text-[#F7073E] font-normal text-2xl whitespace-nowrap">
                ¿LO QUE
              </p>
              <p className="z-50 text-[#F7073E] font-bold text-[35px] whitespace-nowrap">
                HACEMOS?{" "}
              </p>
            </div>
            <div className="h-[55vh] w-full overflow-hidden  relative pl-24 lg:pl-52 xl:pl-64 2xl:pl-80 ">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  style={{
                    opacity: iconOpacity(
                      (index - 1) * 0.2,
                      (index - 1) * 0.2 + 0.1,
                      (index - 1) * 0.2 + 0.2
                    ),
                    translateY: iconTranslateY(
                      (index - 1) * 0.2,
                      (index - 1) * 0.2 + 0.1,
                      (index - 1) * 0.2 + 0.2,
                      index * -10
                    ),
                    display: iconDisplay(
                      (index - 1) * 0.2,
                      (index - 1) * 0.2 + 0.1,
                      (index - 1) * 0.2 + 0.2
                    ),
                  }}
                  className={`w-300px xl:w-full flex flex-col px-4 md:px-16 gap-2 whitespace-pre-wrap absolute 
                                ${section.id === 2 ? "top-[60%]" : ""}
                                ${section.id === 3 ? "bottom-[-15%]" : ""}
                                ${section.id === 4 ? "bottom-[-40%]" : ""}
                                ${section.id === 5 ? "bottom-[-55%]" : ""}
                            `}
                >
                  <p className="font-bold text-[#FF6F1F] text-[12px] md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    {section.title}
                  </p>
                  <p className="text-[#A49090] font-medium text-[12px] md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
