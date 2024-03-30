import React, { useState } from 'react';

const BgImageButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(null);

  // Set default background image
  const setDefaultBackground = () => {
    setBackgroundImage('/new4.png');
    document.body.style.backgroundImage = `url('/new4.png')`;
  };

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBackgroundImage(reader.result);
        document.body.style.backgroundImage = `url('${reader.result}')`;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Customize Background
      </button>
      {isExpanded && (
        <div className="absolute top-10 right-0 bg-white rounded-md shadow-md p-4">
          <input
            type="file"
            accept="image/*"
            className="mb-2"
            onChange={handleFileChange}
          />
          <button
            onClick={setDefaultBackground}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Default
          </button>
        </div>
      )}
    </div>
  );
};

export default BgImageButton;
