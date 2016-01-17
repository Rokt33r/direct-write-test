const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      directWrite: false
    }
  })

  const url = path.resolve(__dirname, './index.html')

  mainWindow.loadURL('file://' + url)
})
