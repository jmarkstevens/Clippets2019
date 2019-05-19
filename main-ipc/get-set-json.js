/* eslint-disable no-console */
const fs = require('fs')

const config = require('../config.json')

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

const dataRoot = configRoot

module.exports.getJson = (filename, event, doneCallBack) => {
  const filePath = `${dataRoot}${filename}.json`
  const jsonReadCallBack = (err, data) => {
    if (err) doneCallBack(`treedata readFile error ${filePath}`)
    else {
      const jsonData = JSON.parse(data.toString())
      doneCallBack(event, jsonData)
    }
  }
  fs.readFile(filePath, jsonReadCallBack)
}

module.exports.setJson = (filename, data) => {
  const filePath = `${dataRoot}${filename}.json`
  const writeFileCallBack = err => {
    if (err) console.log('error saving sniplist.json file ')
  }
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack)
}
