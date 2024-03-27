import { useEffect, useState, useContext } from "react";
import { stages, controllers } from "../constants/constants";
import { FormDataContext } from "../context/FormDataContext";
import ring from "../assets/bell-ring.mp3";

const useTimer = () => {
  const { formData } = useContext(FormDataContext);
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(stages);
  const [sessionCount, setSessionCount] = useState(0); // Added sessionCount state

  const Sound = () => {
    const audio = new Audio(ring);
    audio.play();
  };

  const resetTimerValues = () => {
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      pomodoroTime: formData.pomodoroTime * 60,
      shortBreakTime: formData.shortBreakTime * 60,
      longBreakTime: formData.longBreakTime * 60,
    }));
  };

  const getRemainingTimePercentage = () => {
    const totalTime = formData[controllers[selectedControl].value] * 60;
    const remainingTime = pomodoro[controllers[selectedControl].value];
    return (remainingTime / totalTime) * 100;
  };

  useEffect(() => {
    let timer = null;
    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[controllers[selectedControl].value] === 0) {
            if (selectedControl === 0) {
              if (sessionCount % 4 === 0) {
                setSelectedControl(2);
              } else {
                setSelectedControl(1);
              }
              setSessionCount((prevCount) => prevCount + 1); // Increment sessionCount when switching between pomodoro and break
            } else {
              setSelectedControl(0);
            }
            resetTimerValues();
            clearInterval(timer);
            Sound();
            return prevPomodoro;
          }
          return {
            ...prevPomodoro,
            [controllers[selectedControl].value]: prevPomodoro[controllers[selectedControl].value] - 1,
          };
        });
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [pomodoro.isPaused, selectedControl, sessionCount, formData]); // Include formData as a dependency

  return { pomodoro, setPomodoro, selectedControl, setSelectedControl, resetTimerValues, getRemainingTimePercentage, sessionCount };
};

export default useTimer;

