//javaScript for the mainWindow

const {BrowserWindow} = require('electron')

//BrowserWindow instance
exports.windows


//mainWindow createWindow fn
exports.createWindow = () => {

  this.win = new BrowserWindow({
    width: 600,
    height: 1080,
    minWidth: 600,
    maxWidth: 600,
  })

  //DevTools
  this.win.webContents.openDevTools()

  //load main window contentt
  this.win.loadURL(`file://${__dirname}/index.html`)


  //handle window closed
  this.win.on('closed', () => {
    this.win = null
  })
}
