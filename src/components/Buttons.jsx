import React from 'react';

function Buttons({ buttons }) {
  return (
    <div className="bg-white bg-opacity-10 rounded-md px-3 py-3 w-1/2 flex h-[60px] items-center justify-evenly">
      <p className="text-white font-semibold text-lg">Buttons: </p>
      {buttons.map((button, index) => (
        <div
		  // eslint-disable-next-line react/no-array-index-key
          key={index.toString()}
          className={`w-7 h-7 leading-7 text-lg rounded-full text-center font-bold bg-white text-green-600 ${button.state === 0 ? 'opacity-30' : 'opacity-100'}`}
        >
          {button.button}
        </div>
      ))}
    </div>
  );
}

export default Buttons;
