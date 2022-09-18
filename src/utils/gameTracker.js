export const gameTracker = (setTrainGear) => {
  window.electronAPI.gearNumber((event, data) => {
    setTrainGear(data);
  });
  setInterval(() => {
    window.electronAPI.getGearNumber();
  }, 1000 / 10);
};
