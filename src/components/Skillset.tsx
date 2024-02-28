// Skillset.tsx

import React from "react";

const Skillset: React.FC = () => {
  const skillSetData: string[] = ['React Js', 'Javascript', 'Typescript','HTML', 'CSS', 'Sass','Tailwind','Node Js','MySQL'];
  return (
    <section id="skillset" className="p-2">
      <h2 className="text-[26px]">Skillset</h2>
      <p className="text-[20px] mt-[2px] ">
        {skillSetData.map(data =>
          <p className="border-collapse border-2 border border-[#3bc9f3] p-1 text-center">{data}</p>
        )}
      </p>
    </section>
  );
};

export default Skillset;
