import React, { useEffect } from "react";
import { controllers } from "../constants/constants";

const Labels = ({ selectedControl, setSelectedControl, resetTimerValues, setPomodoro }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the pressed key matches the desired keys (p, s, l)
      if (event.key === "p" || event.key === "s" || event.key === "l") {
        // Determine the index based on the pressed key
        let index;
        switch (event.key) {
          case "p":
            index = 0;
            break;
          case "s":
            index = 1;
            break;
          case "l":
            index = 2;
            break;
          default:
            index = 0; // Default to first tab if key doesn't match
        }

        // Ensure the index is within the bounds of the controllers array
        if (index >= 0 && index < controllers.length) {
          handleSelectedControl(index);
        }
      }
    };

    // Add event listener when component mounts
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup by removing event listener when component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSelectedControl]); // Include handleSelectedControl in the dependency array to ensure it has the latest reference

  function handleSelectedControl(index) {
    setSelectedControl(index);
    resetTimerValues();
    setPomodoro((prevPomodoro) => ({
      ...prevPomodoro,
      isPaused: true,
    }));
  }

  return (
    <div>
      <ul className="tw-infoContainer">
        {controllers.map((controller, index) => (
          <li
            key={index}
            className={`tw-infoItem ${selectedControl === index && "active"}`}
            onClick={() => handleSelectedControl(index)}>
            {controller.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Labels;
