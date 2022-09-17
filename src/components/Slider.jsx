import React from 'react';

function Slider({ axis }) {
  return (
    <div className="bg-white bg-opacity-10 rounded-md px-3 py-3 w-1/2">
      <div className="whitespace-pre flex">
        <p className="text-white font-semibold text-lg">Slider:  </p>
        <p className="text-white text-lg font-semibold text-green-600">{axis}</p>
      </div>
      <div>
        <div className="w-full bg-white rounded-full overflow-hidden">
          <div className="h-2 bg-green-600" style={{ width: `${`${Math.round((axis + 100) / 2)}%`}` }} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
