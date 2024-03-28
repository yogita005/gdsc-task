import { useEffect, useState, useContext } from "react";
import { stages, controllers } from "../constants/constants";
import { FormDataContext } from "../context/FormDataContext";
import ring from "../assets/bell-ring.mp3";

const useTimer = () => {
  const { formData } = useContext(FormDataContext);
  const [selectedControl, setSelectedControl] = useState(0);
  const [pomodoro, setPomodoro] = useState(stages);

  // Retrieve sessionCount from local storage upon component initialization
  const [sessionCount, setSessionCount] = useState(() => {
    const storedSessionCount = localStorage.getItem("sessionCount");
    return storedSessionCount ? parseInt(storedSessionCount, 10) : 0;
  });

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

  // Function to reset total session count
  const resetSessionCount = () => {
    localStorage.removeItem("sessionCount");
    setSessionCount(0);
  };

  useEffect(() => {
    let timer = null;
    if (!pomodoro.isPaused) {
      timer = setInterval(() => {
        setPomodoro((prevPomodoro) => {
          if (prevPomodoro[controllers[selectedControl].value] === 0) {
            if (selectedControl === 0) {
              setSelectedControl((prevControl) => {
                const nextControl = (prevControl + 1) % 4 === 0 ? 2 : 1;
                return nextControl;
              });
              setSessionCount((prevCount) => {
                const newCount = prevCount + 1;
                localStorage.setItem("sessionCount", newCount.toString());
                return newCount;
              });
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
  }, [pomodoro.isPaused, selectedControl, sessionCount, formData]);

  return { pomodoro, setPomodoro, selectedControl, setSelectedControl, resetTimerValues, getRemainingTimePercentage, sessionCount, resetSessionCount };
};

export default useTimer;
