import { useEffect, useState } from "react";
import "./App.css";
import LeftSection from "./Sections/LeftSection/LeftSection";
import RightSection from "./Sections/RightSection/RightSection";

function App() {
  const [sectionIds, setSectionIds] = useState([]);
  const [navItems, setNavItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionIds = (sectionId) => {
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle =
      document.getElementById(sectionId).childNodes[0].textContent;
    // { title: "Project", sectionId: "Project-section" },
    const obj = { title: elementTitle, sectionId: elementId };
    setNavItems((prev) => {
      if (prev.findIndex((e) => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  };

  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const elOffsetTop = document.getElementById(el).getClientRects()[0].y
      const height = document.getElementById(el).getClientRects()[0].height * 0.5
      const viewHeight = window.innerHeight * 0.3

      if(elOffsetTop <= 0){
        if((elOffsetTop + height) > viewHeight){
          setCurrentSection(el)
        }
      }else if(elOffsetTop > 0 && elOffsetTop < viewHeight){
        setCurrentSection(el)
      }
    }
  };

  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  return (
    // Container //
    <div className="mt-14 max-w-7xl mx-auto grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection navItems={navItems} currentSection={currentSection} />
      <RightSection onInitial={addSectionIds} />
    </div>
  );
}

export default App;
