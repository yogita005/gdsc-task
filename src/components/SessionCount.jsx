import React from "react";
import useTimer from "../hooks/useTimer";

const SessionCount = () => {
  const { pomodoro, selectedControl, resetSessionCount, getRemainingTimePercentage, sessionCount } = useTimer();
  const handleResetSessionCount = () => {
    resetSessionCount();
  };


  return (
    <div>
       <div className="bg-gray-100 rounded-md p-3 mb-4">
        Session Count: <span className="text-blue-500 font-bold">{sessionCount}</span>
      </div>
      <button
        onClick={handleResetSessionCount}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-9 rounded"
      >
        Reset Count ↻
      </button>
      {/* Other timer components */}
    </div>
  );
};

export default SessionCount;
