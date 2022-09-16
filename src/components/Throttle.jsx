import React, { useEffect, useState } from 'react';

function Throttle() {
  const [axis, setAxis] = useState(0);
  const [widthbar, setWidthbar] = useState('50%');
  const scanGamepads = () => {
    const gamepad = navigator.getGamepads();
    try {
      setAxis(Math.round(gamepad[0].axes[2] * -50 + 50));
      setWidthbar(`${Math.round(gamepad[0].axes[2] * -50 + 50).toString()}%`);
    } catch (e) {
    // ss
    }
  };

  useEffect(() => {
    setInterval(() => {
      scanGamepads();
    }, 1000 / 100);
  }, []);

  return (
    <div className="bg-white bg-opacity-10 rounded-md px-3 py-3 w-1/2">
      <div className="whitespace-pre flex">
        <p className="text-white font-semibold text-lg">Throttle:  </p>
        <p className="text-white text-lg font-semibold text-green-600">{axis}</p>
      </div>
      <div>
        <div className="w-full bg-white rounded-full overflow-hidden">
          <div className="h-2 bg-green-600" style={{ width: widthbar }} />
        </div>
      </div>
    </div>
  );
}

export default Throttle;
