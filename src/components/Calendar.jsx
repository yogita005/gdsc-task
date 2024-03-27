import React, { useState } from "react";
import Draggable from "react-draggable";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DCalendar = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const tileClassName = ({ date }) => {
    // Custom styling for the current date
    if (date.getDate() === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      return 'font-bold text-white bg-blue-500 rounded-full';
    }
    return '';
  };

  return (
    <Draggable>
      <div className="relative w-64 p-4 bg-mint-300 border border-gray-200 rounded-md shadow-md  ">
        <div className={`calendar-container ${isMinimized ? 'minimized' : 'bg-mint-200'}`}>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-lg text-gray-800 font-bold">
              <span className="border-b-2 border-gray-300 pb-1 font-bold max-sm:text-xs">Calendar</span>
            </h1>
            <button 
              onClick={toggleMinimize}
              className="p-1 rounded-md  hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-500 text-xs max-sm:text-xs"
            >
              {isMinimized ? '➕' : '➖'}
            </button>
          </div>
          {!isMinimized && (
            <Calendar 
              className="border border-gray-300 rounded-xl"
              calendarClassName="bg-mint-200 text-gray-800"
              tileClassName={tileClassName}
            />
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default DCalendar;
