import "./App.css";
import LeftSection from "./Sections/LeftSection/LeftSection";
import RightSection from "./Sections/RightSection/RightSection";

function App() {
  return (
    // Container //
    <div className="mt-14 max-w-7xl mx-auto grid grid-cols-[40%_60%] p-2">
      <LeftSection/>
      <RightSection/>
      
    </div>
  );
}

export default App;
