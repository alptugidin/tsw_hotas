const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const robot = require('@jitsi/robotjs');

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
  const pos = robot.getMousePos();
  const color = robot.getPixelColor(pos.x, pos.y);
  win.webContents.send('color-response', color);
};

app.on('ready', () => {
  createWindow();
  ipcMain.on('color-request', getPixelColor);
});
