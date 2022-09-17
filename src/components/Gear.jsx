import React from 'react';

function Gear({ axis }) {
  const gear = () => {
    if (axis <= 11) {
      return 0;
    }
    if (axis > 11 && axis <= 22) {
      return 1;
    }
    if (axis > 22 && axis <= 33) {
      return 2;
    }
    if (axis > 33 && axis <= 44) {
      return 3;
    }
    if (axis > 44 && axis <= 55) {
      return 4;
    }
    if (axis > 55 && axis <= 66) {
      return 5;
    }
    if (axis > 66 && axis <= 77) {
      return 6;
    }
    if (axis > 77 && axis <= 88) {
      return 7;
    }
    if (axis > 88) {
      return 8;
    }
    return 0;
  };
  return (
    <div className="bg-white bg-opacity-10 rounded-md px-3 py-3 w-1/2 flex justify-evenly h-[60px] items-center">
      <p className="text-white font-semibold text-lg whitespace-pre">Gear:</p>
      {[...Array(9).keys()].map((i) => (
        <div key={i.toString()} className={`w-7 h-7 leading-7 text-lg rounded-full text-center font-bold text-green-600 bg-white ${gear() === i ? 'opactiy-100' : 'opacity-30'}`}>{i}</div>
      ))}
    </div>
  );
}

export default Gear;
