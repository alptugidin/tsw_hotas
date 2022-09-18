import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Throttle from '@/components/Throttle';
import Gear from '@/components/Gear';
import Slider from '@/components/Slider';
import Buttons from '@/components/Buttons';
import TrainGear from '@/components/TrainGear';
import { deviceTracker } from '@/utils/deviceTracker';
import { gameTracker } from '@/utils/gameTracker';

function App() {
  const [gamepadID, setgamepadId] = useState(null);
  const [throttleAxis, setThrottleAxis] = useState(0);
  const [sliderAxis, setSliderAxis] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [trainGear, setTrainGear] = useState(0);

  useEffect(() => {
    deviceTracker(setgamepadId, setThrottleAxis, setSliderAxis, setButtons);
    gameTracker(setTrainGear);
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
      <div className="bg-white bg-opacity-10 rounded-md px-3 py-3 w-full">
        <TrainGear trainGear={trainGear} />
      </div>
    </div>
  );
}
export default App;
