const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  gearNumberRequest: () => ipcRenderer.send('robot-request'),
  gearNumberListener: (callback) => ipcRenderer.on('robot-response', (callback)),
});
