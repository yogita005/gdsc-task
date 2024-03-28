import React from "react";
import Todo from "./Todo";
import Quotes from "./Quotes";
import Stopwatch from "./Stopwatch";
import StickyNote from "./StickyNote";
import Calendar from "./Calendar";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="relative inline-block text-left">
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 max-sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      <div className="hidden max-sm:block">
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md bg-transparent shadow-sm px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700 text-5xl"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleSidebar}
        >
          ⏱️
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-left absolute left-full top-16 right-0 mt-2 w-[255px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none max-sm:text-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1 mb-0" role="none">
            <Todo />
            <Quotes />
            <Stopwatch />
            <StickyNote />
            <Calendar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
