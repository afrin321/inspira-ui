import React from "react";
import Gp2 from "./../assets/graphics_2.png";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section id="about" className="bg-[#E4E3DB] px-20 pt-10 overflow-hidden flex w-full h-full relative">
      <div className="flex flex-col justify-around h-full w-1/2 gap-10">
        <motion.span
          initial={{ opacity: "0%" }}
          whileInView={{ opacity: "100%" }}
          transition={{ delay: 0, duration: 1 }}
          className="text-[#F7073E] text-5xl whitespace-nowrap my-0"
        >
          ¿QUÉ NOS <b className="font-bold">INSPIRA</b>?{" "}
        </motion.span>
        <motion.div
        className="w-full"
          initial={{ opacity: "0%" }}
          whileInView={{ opacity: "100%" }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="text-[#A49090] text-md lg:text-xl font-semibold">
            Llegamos en el 2007 con el propósito de <b>cuidar</b> la
            consistencia e iconicidad de las marcas con las que colaboramos
            contribuyendo a su <b>memorabilidad</b>. <br /> Lo que más nos
            inspira, <b>es ser el guardián de tu marca.</b>
            <br />
          </p>
          <br />
          <p className="text-[#A49090] text-ms lg:text-xl  font-semibold">
            Damos soluciones en comunicación gráfica para los diferentes puntos
            de contacto entre una marca y su consumidor.
            <br />
          </p>
          <br />
          <p className="text-[#A49090] text-ms lg:text-xl font-semibold">
            Somos <b>expertos</b> en la gestión de marca para{" "}
            <b>procesos y soluciones de etiquetado</b>, desde la fase de diseño
            hasta la producción de empaque. Trabajamos en equipo con nuestros
            socios comerciales para determinar la eficiencia del proceso e
            implementar mejoras que resulten en ahorro en costos y mejores
            resultados de negocio.
          </p>
        </motion.div>
      </div>
      <div className="w-1/2 h-[600px] xl:h-[550px] flex self-center -mt-10 2xl-mt-0 ">
        <motion.div
          className="h-full w-full  ease-in"
          initial={{
            translateX: '50vh',
          }}
          whileInView={{
            translateX: '10vh',
          }}
          transition={{
            delay: 0,
            duration: 1.5,
          }}
          animate={{ opacity: 1, top: "auto" }}
        >
          <img src={Gp2} className="h-full w-full object-contain " />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
