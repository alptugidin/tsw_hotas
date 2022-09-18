export const deviceTracker = (setgamepadId, setThrottleAxis, setSliderAxis, setButtons) => {
  window.addEventListener('gamepadconnected', (device) => {
    setgamepadId(device.gamepad.id);
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
};
