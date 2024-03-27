import React, { useEffect } from "react";

const ToggleButton = ({ pomodoro, setPomodoro }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        togglePausePlay();
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup by removing event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures that the effect runs only once

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



