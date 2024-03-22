import React from 'react';

function DefaultButton({ title, onClick }) {
  return (
    <button onClick={onClick} className="bg-primary border-primary text-white px-8 py-3 font-medium 
                rounded-md hover:bg-blue-800 hover:text-white cursor-grab">
      {title}
    </button>
  );
}

export default DefaultButton;
