export const gameTracker = (setTrainGear) => {
  window.electron.gearNumberListener((event, data) => {
    setTrainGear(data);
  });
  setInterval(() => {
    window.electron.gearNumberRequest();
  }, 1000 / 10);
};
