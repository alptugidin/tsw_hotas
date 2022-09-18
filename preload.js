const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getGearNumber: () => ipcRenderer.send('robot-request'),
  gearNumber: (callback) => ipcRenderer.on('robot-response', (callback)),
});
