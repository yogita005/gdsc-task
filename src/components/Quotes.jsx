import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [minimized, setMinimized] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
      })
      .catch((error) => console.error("Error fetching quote:", error));
  }, []);

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
    <div className="w-64 p-4 bg-mint-300 border border-gray-300 rounded-md shadow-md  max-sm:text-xs">
      <div className={`quote-container ${minimized ? 'minimized' : ''}`}>
        
        <div className="header">
          <button className="minimize" onClick={minimized ? handleMaximize : handleMinimize}>{minimized ? '➕' : '➖'}</button>
          <span className="font-bold ml-[10px]">Quotes</span>
        </div>
        {!minimized && (
          <div className="quote-content">
            <p className="text-gray-800 italic">"{quote}"</p>
            </div>
          
        )}
      </div>
      </div>
    </Draggable>
  );
};

export default Quote;
