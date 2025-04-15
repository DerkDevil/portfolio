"use client";

import CountUp from "react-countup";

const stats = [
  { num: 6, text: "Años de experiencia" },
  { num: 800, text: "Horas de autodidacta" },
  { num: 5, text: "Stacks explorados" },
  { num: 400, text: "Errores corregidos" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[90vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              <CountUp
                start={0}
                end={item.num}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p className="text-sm xl:text-base mt-2 text-white/80 max-w-[120px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
