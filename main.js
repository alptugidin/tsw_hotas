const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const robot = require('@jitsi/robotjs');
const { colorToNumber } = require('./src/utils/colorToNumber');

let win;
const createWindow = () => {
  win = new BrowserWindow(
	  {
	  width: 800,
	  height: 600,
      resizable: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
	  },
    },
  );
  win.loadFile('index.html').then((r) => r);
};

const getPixelColor = () => {
  const digit0 = robot.getPixelColor(1516, 835) === 'ffffff';
  const digit1 = robot.getPixelColor(1512, 839) === 'ffffff';
  const digit2 = robot.getPixelColor(1520, 839) === 'ffffff';
  const digit3 = robot.getPixelColor(1516, 843) === 'ffffff';
  const digit4 = robot.getPixelColor(1512, 847) === 'ffffff';
  const digit5 = robot.getPixelColor(1520, 847) === 'ffffff';
  const digit6 = robot.getPixelColor(1516, 851) === 'ffffff';
  const digits = [[digit0, digit1, digit2, digit3, digit4, digit5, digit6]];
  win.webContents.send('robot-response', colorToNumber(digits));
};

app.on('ready', () => {
  createWindow();
  ipcMain.on('robot-request', getPixelColor);
});
