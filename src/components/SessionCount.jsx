import React from "react";
import useTimer from "../hooks/useTimer";

const SessionCount = () => {
  const { sessionCount } = useTimer();

  return (
    <div className="session-count text-mint-800 font-bold text-lg mb-4">
      Total Pomodoro Sessions: {sessionCount}
      
    </div>
  );
};

export default SessionCount;
