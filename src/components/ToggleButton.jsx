import React, { useEffect } from "react";

const ToggleButton = ({ pomodoro, setPomodoro }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        togglePausePlay();
      }
    };

   
    document.addEventListener("keydown", handleKeyDown);

    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); 

  function togglePausePlay() {
    setPomodoro((prevPomodoro) => {
      return {
        ...prevPomodoro,
        isPaused: !prevPomodoro.isPaused,
      };
    });
  }

  return (
    <button onClick={togglePausePlay} className="text-6xl uppercase mb-[10px]">
      {pomodoro.isPaused ? "▶" : "||"}
    </button>
  );
};

export default ToggleButton;



