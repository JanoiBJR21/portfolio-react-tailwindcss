import React from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import ContactMe from "./ContactMe/ContactMe";

const LeftSection = () => {
  return (
    // Left
    <div className="px-5">
      <div className="sticky top-14 grid gap-y-5 lg:grid-rows-[35%_35%_30%] lg:h-[95vh]">
        <Header />
        <Nav />
        <ContactMe />
      </div>
    </div>
  );
};

export default LeftSection;
