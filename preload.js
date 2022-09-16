const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getPixelColor: () => ipcRenderer.send('color-request'),
  pixelColor: (callback) => ipcRenderer.on('color-response', (callback)),
});
