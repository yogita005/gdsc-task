import Labels from "./components/Labels";
import TimeDisplay from "./components/TimeDisplay";
import ToggleButton from "./components/ToggleButton";
import Modal from "./components/Modal";
import useTimer from "./hooks/useTimer";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";
import useCalculateTime from "./hooks/useCalculateTime";
import { controllers } from "./constants/constants";
import Todo from "./components/Todo";
import Shortcuts from "./components/shortcuts";
import Sidebar from "./components/Sidebar";
import StickyNote from "./components/StickyNote";
import Quotes from "./components/Quotes";
import Stopwatch from "./components/Stopwatch";
import SessionCount from "./components/SessionCount";
import Calendar from "./components/Calendar";


const App = () => {
  const { pomodoro, selectedControl, setPomodoro, setSelectedControl, resetTimerValues, getRemainingTimePercentage } = useTimer();
  const { minutes, seconds } = useCalculateTime({ pomodoro, selectedControl });
  const [isSettingsOn, setIsSettingsOn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  document.title = `${controllers[selectedControl].label} - ${minutes < 9 ? "0" : ""}${minutes}:${seconds < 9 ? "0" : ""}${seconds}`;

  return (
    <main className=" justify-center items-center ">
    <div className="flex mt-0">

    <div className="absolute left-0 top-0">
      {/* Render Pomodoro and other components */}
    </div>
      <div className="absolute left-0 top-0">
      <div className="absolute top-0 right-0">
        <button onClick={() => setIsSettingsOn(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-8 h-8 m-6"
          >
            {/* Settings SVG */}
          </svg>
        </button>
   
      </div>

     

      </div>

      <div className="flex-1">
        <Labels
          resetTimerValues={resetTimerValues}
          selectedControl={selectedControl}
          setSelectedControl={setSelectedControl}
          setPomodoro={setPomodoro}
        />
        <div className="tw-timer-container">
          <div className="tw-timer">
            <div className="flex flex-col justify-center items-center font-semibold relative ">
              <CircularProgressbarWithChildren
                strokeWidth={5}
                trailColor="transparent"
                value={getRemainingTimePercentage()}
                styles={buildStyles({
                  trailColor: "transparent",
                  pathColor: "#EA4335",
                })}
              >
                <ToggleButton
                  pomodoro={pomodoro}
                  setPomodoro={setPomodoro}
                />
                <TimeDisplay
                  pomodoro={pomodoro}
                  selectedControl={selectedControl}
                />
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0">
        <Shortcuts />
      </div>
      <div className="absolute top-0 right-0">
        <button onClick={() => setIsSettingsOn(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-8 h-8 m-6"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
        
      </div>
      

      <Modal
        isSettingsOn={isSettingsOn}
        setIsSettingsOn={setIsSettingsOn}
        setPomodoro={setPomodoro}
      />
    
      <div className="absolute p-[20px] right-0 flex flex-col gap-4 mobile:static max-sm:hidden">
        <Todo />
        <Quotes />
        <Stopwatch />
        <StickyNote />
        <Calendar />
      </div>
      <div className="absolute bottom-10">
      <SessionCount/>
      </div>
      <div className="absolute bottom-10 ml-[25%]">
    <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} className="hidden sm:flex" />
  </div>
  </div>
    </main>
  );
};

export default App;
