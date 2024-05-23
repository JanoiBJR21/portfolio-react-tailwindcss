import React from "react";

const Tech = ({ isHighLight, dataTech }) => {
  return (
    <div>
      <div className="flex gap-2 text-primarySubcontent text-sm ">
        {dataTech.map((e, i) => (
          <div
            key={`${e}-tech-${i}`}
            className={`bg-neutral-800 px-2 py-1 rounded-md 
          ${isHighLight ? "text-primaryAccent" : ""}`}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
