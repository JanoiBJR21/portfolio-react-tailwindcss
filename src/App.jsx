// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  return (
    <div className="mt-14 max-w-7xl mx-auto grid grid-cols-[40%_60%] ">
      {/* Left */}
      <div>
        <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-screen">
          <div className="flex flex-col gap-2">
            <div className="text-3xl text-primaryTitle font-semibold">
              Apichat Wongtala
            </div>
            <div className="font-semibold">
              Front-end Developer *between jobs
            </div>
            <div className="text-sm w-5/6 text-primaryContent">
              From concept to reality, bridging the gap with code, transforming
              ideas into tangible digital solutions.
            </div>
            <div className="mt-4">
              <span className="bg-primaryTitle py-2 px-4 rounded-md">View Resume</span>
            </div>
          </div>

          <div>Nav</div>

          <div className="flex items-end">Link</div>
        </div>
      </div>

      {/* Right */}
      <div>
        <div>About</div>
        <div className="mb-96">Experience</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
        <div className="mb-96">Project</div>
      </div>
    </div>
  );
}

export default App;
