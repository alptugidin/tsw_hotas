import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Throttle from '@/components/Throttle';
import Game from '@/components/Game';
import Gear from '@/components/Gear';

function App() {
  const [gamepad, setGamepad] = useState({});

  useEffect(() => {
    window.addEventListener('gamepadconnected', (device) => {
      setGamepad(device.gamepad);
    });

    window.electronAPI.pixelColor((event, data) => {
      document.getElementById('palette').style.background = `#${data}`;
    });
  }, []);

  return (
    <div className="p-5 bg-gray-800 h-screen">
      <Header gamepad={gamepad} />
      <div className="flex flex-wrap gap-5 mt-5">
        <div className="w-full flex gap-5">
          <Throttle />
          <Game />
        </div>
        <div className="w-full flex gap-5">
          <Gear />
          <div className="bg-white bg-opacity-10 rounded-md px-3 py-3 w-1/2 opacity-0">
            <p>gear</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
