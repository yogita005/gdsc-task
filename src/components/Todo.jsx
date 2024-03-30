import React, { useState } from "react";
import Draggable from "react-draggable";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [isMinimized, setIsMinimized] = useState(true); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, { task: inputValue, checked: false }]);
      setInputValue("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditingIndex(index);
    setEditValue(tasks[index].task);
  };

  const handleSaveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].task = editValue;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditValue("");
  };

  const handleCheckTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Draggable handle=".handle">
      <div
        className={`bg-mint-300 rounded-lg p-3 shadow-md text-mint-800 ${isMinimized ? 'h-auto' : ''}`}
      >
        <div className={`flex justify-between items-center handle`}>
          <h1 className="text-mint-800 font-bold mb-4 max-sm:text-xs">Todo List</h1>
          <button
            onClick={toggleMinimize}
            className="bg-none text-mint-800 px-4 py-2 rounded-md hover:bg-mint-50 max-sm:text-xs  "
          >
            {isMinimized ? "➕" : "➖"}
          </button>
        </div>
        {!isMinimized && (
          <>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="border border-gray-300 text-mint-800 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:ring focus:border-mint-200"
              placeholder="Enter task..."
            />
            <button
              onClick={handleAddTask}
              className="bg-mint-300 text-mint-800 px-4 py-2 rounded-md hover:bg-mint-300 focus:outline-none focus:ring focus:border-blue-500"
            >
              Add Task
            </button>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className="mt-2">
                  <input
                    type="checkbox"
                    checked={task.checked}
                    onChange={() => handleCheckTask(index)}
                    className="mr-2"
                  />
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="border border-gray-300 text-mint-800 rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
                      />
                      <button
                        onClick={() => handleSaveEdit(index)}
                        className="bg-green-300 text-green-800 px-4 py-2 rounded-md ml-2 hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-500"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <span
                        style={{ textDecoration: task.checked ? "line-through" : "none" }}
                      >
                        {task.task}
                      </span>
                      <button
                        onClick={() => handleEditTask(index)}
                        className="bg-[#ffc] text-yellow-800 px-2 py-1 text-sm rounded-md ml-2 hover:bg-yellow-600 focus:outline-none focus:ring focus:border-blue-500"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDeleteTask(index)}
                        className="bg-[#FADBD8] text-red-800px-2 px-2 py-1 text-sm rounded-md ml-2 hover:bg-[#F5B7B1] focus:outline-none focus:ring focus:border-blue-500"
                      >
                        ❌
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Draggable>
  );
};

export default Todo;
