import { BiSun, BiMoon } from "react-icons/bi";
import React, { useState } from "react";
const Darkmode = () => {
  const [getDrakMode, setDrakmode] = useState(true);

  const toggleDarkMode = () => {
    setDrakmode(!getDrakMode);
    if (getDrakMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <div className="flex justify-center items-center mr-1">
      <button onClick={toggleDarkMode}>
        {getDrakMode ? (
          <div className="text-2xl text-yellow-400 bg-slate-600 rounded-[100%] p-[3px]">
            <BiSun />
          </div>
        ) : (
          <div className="text-2xl text-yellow-400 bg-slate-600 rounded-[100%] p-[3px] ">
            <BiMoon />
          </div>
        )}
      </button>
    </div>
  );
};

export default Darkmode;
