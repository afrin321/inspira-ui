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
      title: "ADAPTACIÓN DE EMPAQUE",
      description:
        "Traducimos la viabilidad de una idea creativa impactante del diseño al anaquel.",
    },
    {
      title: "ADAPTACIÓN DE EMPAQUE",
      description:
        "Traducimos la viabilidad de una idea creativa impactante del diseño al anaquel.",
    },
    {
      title: "COMUNICACIÓN GRÁFICA POP Y OOH",
      description:
        "Aseguramos la iconicidad de la marca y la claridad del mensaje en todos sus puntos de contacto.",
    },
    {
      title: "GESTIÓN DE MARCA EN PROCESOS DE ETIQUETADO",
      description:
        "Lideramos el proceso desde diseño hasta producción. Nos aseguramos de cumplir con los requisitos de calidad en los mejores tiempos.",
    },
    {
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
              className="absolute left-[30%]"
              alt="Image2"
            />
          </div>
          <div className="bg-transparent w-1/2 flex flex-col justify-start relative gap-6">
            <div className="sticky r-0 w-auto flex flex-col items-end px-6 md:px-20 gap-1">
              <p className="z-50 text-[#F7073E] font-normal text-[22px] md:text-[45px] leading-[35px] md:leading-[75px] whitespace-nowrap">
                ¿LO QUE
              </p>
              <p className="z-50 text-[#F7073E] font-bold text-[22px] md:text-[45px] leading-[35px] md:leading-[75px] whitespace-nowrap">
                HACEMOS?{" "}
              </p>
            </div>
            <div className="h-[55vh] w-full overflow-hidden  relative pl-36 lg:pl-52 xl:pl-64 2xl:pl-80 ">
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
                  className={`w-full flex flex-col px-6 md:px-20 gap-2 whitespace-pre-wrap absolute
                                ${index === 1 ? "top-[50%]" : ""}
                                ${index === 2 ? "bottom-[-15%]" : ""}
                                ${index === 3 ? "bottom-[-20%]" : ""}
                                ${index === 4 ? "bottom-[-35%]" : ""}
                            `}
                >
                  <p className="font-bold text-[#FF6F1F] text-[15px] md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
                    {section.title}
                  </p>
                  <p className="text-[#A49090] font-medium text-[15px] md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
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
