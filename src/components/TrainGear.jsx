import React from 'react';

function TrainGear({ trainGear }) {
  return (
    <div className="whitespace-pre">
      <p className="text-white text-lg font-semibold">
        Train Gear:
        {trainGear}
      </p>
    </div>
  );
}

export default TrainGear;
