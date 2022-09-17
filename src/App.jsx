import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Throttle from '@/components/Throttle';
import Gear from '@/components/Gear';
import Slider from '@/components/Slider';
import Buttons from '@/components/Buttons';

function App() {
  const [gamepadID, setgamepadId] = useState(null);
  const [throttleAxis, setThrottleAxis] = useState(0);
  const [sliderAxis, setSliderAxis] = useState(0);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    window.addEventListener('gamepadconnected', (device) => {
      setgamepadId(device.gamepad.id);
    });

    window.electronAPI.pixelColor((event, data) => {
      document.getElementById('palette').style.background = `#${data}`;
    });

    setInterval(() => {
      setThrottleAxis(Math.round(navigator.getGamepads()[0].axes[2] * -50 + 50));
      setSliderAxis(Math.round(navigator.getGamepads()[0].axes[6] * 100));
      setButtons([
        { button: 'B5', state: navigator.getGamepads()[0].buttons[4].value },
        { button: 'B6', state: navigator.getGamepads()[0].buttons[5].value },
        { button: 'B7', state: navigator.getGamepads()[0].buttons[6].value },
        { button: 'B8', state: navigator.getGamepads()[0].buttons[7].value },
        { button: 'R2', state: navigator.getGamepads()[0].buttons[8].value },
        { button: 'L2', state: navigator.getGamepads()[0].buttons[9].value },
        { button: 'SE', state: navigator.getGamepads()[0].buttons[10].value },
        { button: 'ST', state: navigator.getGamepads()[0].buttons[11].value },
      ]);
    }, 1000 / 100);
  }, []);

  return (
    <div className="p-5 bg-gray-800 h-screen">
      <Header gamepadID={gamepadID} />
      <div className="flex flex-wrap gap-5 mt-5">
        <div className="w-full flex gap-5">
          <Throttle axis={throttleAxis} />
          <Slider axis={sliderAxis} />
        </div>
        <div className="w-full flex gap-5 h-20">
          <Gear axis={throttleAxis} />
          <Buttons buttons={buttons} />
        </div>
      </div>
    </div>
  );
}
export default App;
