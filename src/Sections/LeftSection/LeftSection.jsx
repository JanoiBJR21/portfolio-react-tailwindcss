import React from "react";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import ContactMe from "./ContactMe/ContactMe";

const LeftSection = ({navItems, currentSection}) => {
  return (
    // Left
    <div className="px-5 mb-14 lg:mb-0">
      <div className="sticky top-14 px-2 grid gap-y-5 lg:grid-rows-[1fr_2fr_30%] lg:h-[68vh]">
        <Header />
        <Nav navItems={navItems} currentSection={currentSection}/>
        <ContactMe />
      </div>
    </div>
  );
};

export default LeftSection;
