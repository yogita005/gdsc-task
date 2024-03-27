import React from "react";
import Todo from "./Todo";
import Quotes from "./Quotes";
import Stopwatch from "./Stopwatch";
import StickyNote from "./StickyNote";
import Calendar from "./Calendar";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className="relative inline-block text-left hidden max-sm:block">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleSidebar}
        >
          Features
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-[255px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none max-sm:text-xs"
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
