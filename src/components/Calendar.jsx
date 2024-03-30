import React, { useState } from "react";
import Draggable from "react-draggable";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "flatpickr/dist/flatpickr.min.css"; 

const DCalendar = () => {
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Draggable>
      <div className="relative w-64 h-[70px] p-4 bg-mint-300 border border-gray-300 rounded-md shadow-sm">
        <div className={`calendar-container ${isMinimized ? 'minimized' : 'bg-mint-200'}`}>
          <div className="flex justify-between items-center mb-1">
            <h1 className="text-gray-800 font-bold">
              <span className=" pb-1 font-bold">Calendar</span>
            </h1>
            <button 
              onClick={toggleMinimize}
              className="p-1 text-base rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:border-blue-500 text-xs"
            >
              {isMinimized ? '➕' : '➖'}
            </button>
          </div>
          {!isMinimized && (
            <div className="relative w-40 rounded-lg overflow-hidden">
              <Flatpickr
                className="border border-white bg-mint-800 w-full rounded-lg"
                options={{
                  disableMobile: true, 
                }}
              />
              <p className="text-gray-600 hover:text-blue-600 font-semibold text-xs absolute top-0 left-0 ml-2 mt-1">
                Check Calendar ↪
              </p>
            </div>
          )}
        </div>
      </div>
    </Draggable>
  );
};

export default DCalendar;
