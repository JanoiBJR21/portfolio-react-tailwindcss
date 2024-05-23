import React from "react";

const Picture = ({ picture, title }) => {
  if (!picture) return null;
  return (
    <div>
      <img
        src={picture}
        alt={title}
        className="w-11/12 rounded-md border-2 border-primaryContent"
      />
    </div>
  );
};

export default Picture;
