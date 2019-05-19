/* eslint-disable no-console */
const { app, BrowserWindow, ipcMain } = require('electron')
const fs = require('fs')
const path = require('path')

const config = require('./config.json')

const useDevTools = false

let configRoot
switch (process.platform) {
  case 'darwin':
    configRoot = process.env.HOME + config.darwin.dataRoot
    break
  case 'linux':
    configRoot = config.linux.dataRoot
    break
  case 'win32':
    configRoot = process.env.USERPROFILE + config.win32.dataRoot
    break
  default:
    break
}

const rootDataPath = configRoot

require('./main-ipc')(ipcMain)

let mainWindow = null
const mainWindowOptions = {
  icon: path.join(__dirname, 'dist', 'img', 'clippets.icns'),
  title: 'Clippets',
  webPreferences: {
    nodeIntegration: true
  }
}

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', () => {
  mainWindow = new BrowserWindow(mainWindowOptions)

  const windowStatePath = `${rootDataPath}windowstate.json`
  let windowState = {}
  if (useDevTools) mainWindow.openDevTools()
  const jsonReadCallBack = (err, data) => {
    if (err) console.log('error opening windowstate')
    else {
      windowState = JSON.parse(data.toString())
      mainWindow.setSize(windowState.size[0], windowState.size[1])
      mainWindow.setPosition(windowState.position[0], windowState.position[1])
    }
  }
  fs.readFile(windowStatePath, jsonReadCallBack)

  mainWindow.loadFile(`./dist/index.html`)
  mainWindow.on('close', () => {
    windowState.size = mainWindow.getSize()
    windowState.position = mainWindow.getPosition()
    const writeFileCallBack = err => {
      if (err) console.log('error saving windowstate.json file ')
      mainWindow = null
    }
    fs.writeFile(
      windowStatePath,
      JSON.stringify(windowState, null, 2),
      writeFileCallBack
    )
  })
})
