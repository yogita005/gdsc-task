import React, { useState } from "react";
import Draggable from "react-draggable";

const StickyNote = ({ id, isVisible, onDelete }) => {
  const [color, setColor] = useState("#ffc"); // Default color: yellow
  const [minimized, setMinimized] = useState(false);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const addNote = () => {
    // Function placeholder for adding notes, can be replaced or extended as needed
    console.log("Note added");
  };

  return (
    <Draggable disabled={minimized}>
      <div
        className="sticky-note"
        style={{
          display: isVisible ? "block" : "none", // Set display based on visibility
          background: color,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "200px",
          minHeight: "100px",
          position: "absolute",
          zIndex: "100",
        }}
      >
        <div>
          <button onClick={toggleMinimize} className="text-xs text-gray-700">
            {minimized ? "➕" : "➖"}
          </button>
          <button onClick={handleDelete}>🗑️</button>
        </div>
        <textarea
          style={{
            width: "100%",
            height: minimized ? "30px" : "80%",
            border: "none",
            resize: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "Arial, sans-serif",
          }}
          placeholder="Write something..."
          readOnly={minimized}
        ></textarea>
        {!minimized && (
          <>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => changeColor("#ffc")}>⭐</button>
              <button onClick={() => changeColor("#FDEDEC")}>🌸</button>
              <button onClick={() => changeColor("#EBF5FB")}>🐋</button>
              <button onClick={() => changeColor("#D5F5E3")}>🥑</button>
            </div>
          </>
        )}
      </div>
    </Draggable>
  );
};

const StickyNoteApp = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: notes.length + 1, isVisible: true }]);
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isVisible: false } : note
      )
    );
  };

  return (
    <div>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          id={note.id}
          isVisible={note.isVisible}
          onDelete={deleteNote}
        />
      ))}
      <button onClick={addNote} className="bg-mint-300 w-64 h-[70px] p-1 rounded-md border border-solid border-[#ccc] font-bold shadow-md max-sm:text-xs max-sm:w-[255px] text-left">➕ Sticky note</button>
    </div>
  );
};

export default StickyNoteApp;
