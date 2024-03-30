import { createContext, useEffect, useState } from "react";
import { stages } from "../constants/constants";

export const FormDataContext = createContext({});

const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    pomodoroTime: stages.pomodoroTime / 60,
    shortBreakTime: stages.shortBreakTime / 60,
    longBreakTime: stages.longBreakTime / 60,
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const value = {
    formData,
    setFormData,
  };

  return <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>;
};

export default FormDataProvider;
