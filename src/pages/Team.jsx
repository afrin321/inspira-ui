import React from "react";
import OtherNav from "../components/OtherNav";
import Person1 from "./../assets/person_1.png";
import Person2 from "./../assets/person_2.png";

function Team() {
  return (
    <section
      id="team"
      className="bg-[#E4E3DB] px-20 gap-10 xl:gap-0 flex flex-col h-full justify-around w-full pt-16"
    >
      <div className="flex justify-end  ">
        <span className="text-[45px] min-[1920px]:text-[70px] leading-[75px] min-[1920px]:leading-[95px] whitespace-nowrap text-[#F7073E] mt-10 mb-4 font-medium">
          ¿QUIÉN NOS <span className="font-bold">INSPIRA</span>?{" "}
        </span>
      </div>
      <div className="h-80 xl:h-96 flex gap-2 justify-start w-full ">
        <div className="w-full lg:w-3/5 flex gap-4 items-center">
          <img src={Person1} className="h-full w-auto" />
          <div className="flex flex-col items-start xl:text-xl 2xl:text-2xl">
            <p className="text-[#FF6F1F] font-medium">
              <b>LUCÍA PÉREZ</b> <br /> GENERAL MANAGER
            </p>
            <p className="text-[#A49090] font-medium">
              Traducimos la viabilidad de una idea creativa impactante, del
              diseño al anaquel.
            </p>
          </div>
        </div>
      </div>
      <div className="h-80 xl:h-96 flex gap-2 justify-end xl:text-xl 2xl:text-2xl w-full mt-0 xl:-mt-10 ">
        <div className="w-full lg:w-3/5 flex gap-4 items-center">
          <img src={Person2} className="h-full w-auto" />
          <div className="flex flex-col items-start">
            <p className="text-[#FF6F1F] font-medium">
              <b>IVONNE FLORES</b> <br /> GENERAL MANAGER
            </p>
            <p className="text-[#A49090] font-medium">
              Traducimos la viabilidad de una idea creativa impactante, del
              diseño al anaquel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
