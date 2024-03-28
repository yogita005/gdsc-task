import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);
  const [minimized, setMinimized] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const startStopwatch = () => {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetStopwatch = () => {
    setTime(0);
    setLaps([]);
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const recordLap = () => {
    setLaps([...laps, formatTime(time)]);
  };

  const handleMinimize = () => {
    setMinimized(true);
  };

  const handleMaximize = () => {
    setMinimized(false);
  };

  const handleDrag = (e, ui) => {
    const { x, y } = position;
    setPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  };

  return (
    <Draggable onDrag={handleDrag} position={position}>
      <div className="w-64 p-2 bg-mint-300 border border-gray-300 rounded-md shadow-md ">
        <div className={`stopwatch-container ${minimized ? 'minimized' : ''}`}>
          <div className="stopwatch">
            <button className="minimize" onClick={minimized ? handleMaximize : handleMinimize}>{minimized ? '➕' : '➖'}</button>
            <span className="font-bold ml-[10px] max-sm:text-xs">Stopwatch</span>
            {!minimized && <div className="display font-semibold p-[10px] text-4xl flex justify-center max-sm:text-xs">{formatTime(time)}</div>}
            <div className="controls font-semibold p-[10px] flex justify-center ">
              {!minimized && (
                <>
                  {!isRunning ? (
                    <button onClick={startStopwatch} className='mx-[5px] px-[10px] rounded-md hover:bg-mint-50'>▶️</button>
                  ) : (
                    <button onClick={stopStopwatch} className='mx-[5px] px-[10px] rounded-md hover:bg-mint-50'>⏹️</button>
                  )}
                  <button onClick={resetStopwatch} className='mx-[5px] px-[10px] rounded-md hover:bg-mint-50'>↻</button>
                  <button onClick={recordLap} className='mx-[5px] px-[10px] rounded-md hover:bg-mint-50'>Lap</button>
                </>
              )}
            </div>
            {!minimized && (
              <div className="laps">
                <h3 className="font-semibold mt-4">Laps:</h3>
                <ul className="list-disc pl-8">
                  {laps.map((lap, index) => (
                    <li key={index}>{lap}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Stopwatch;
