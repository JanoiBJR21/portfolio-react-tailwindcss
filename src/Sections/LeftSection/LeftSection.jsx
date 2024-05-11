import React from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import ContactMe from "./ContactMe/ContactMe";

const LeftSection = () => {
  return (
    // Left
    <div>
      <div className="sticky top-14 grid grid-rows-[35%_35%_30%] h-[64vh]">
        <Header />
        <Nav />
        <ContactMe />
      </div>
    </div>
  );
};

export default LeftSection;
