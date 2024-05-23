import React from "react";

const FormatteDate = ({ isHighLight, children }) => {
  return (
    <div>
      <span
        className={`text-primaryContent text-sm ${ isHighLight ? "text-primaryHeader" : "" }`}>
        {children}
      </span>
    </div>
  );
};

export default FormatteDate;
