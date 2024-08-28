import React, { useState } from 'react';
import Popup from './Popup'; // Import the Popup component

function BlockButton() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative'>
      <div
        className='absolute top-[20px] left-5 z-10 text-white border-[5px] border-gray-600 rounded-[30px] px-2 py-1 hover:bg-purple-950 cursor-pointer'
        onClick={togglePopup}
      >
        <button>+ Block</button>
      </div>
      {isOpen && <Popup onClose={togglePopup} />}
    </div>
  );
}

export default BlockButton;
