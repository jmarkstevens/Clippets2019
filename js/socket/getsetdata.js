/* eslint-disable no-console */
const fs = require('fs')
const config = require('../../config.json')

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

module.exports.getTreeData = (event, doneCallBack) => {
  const filePath = `${dataRoot}TreeData.json`
  const jsonReadCallBack = (err, data) => {
    if (err) doneCallBack(`treedata readFile error ${filePath}`)
    else {
      const jsonData = JSON.parse(data.toString())
      doneCallBack(event, jsonData)
    }
  }
  fs.readFile(filePath, jsonReadCallBack)
}

module.exports.setTreeData = data => {
  const filePath = `${dataRoot}TreeData.json`
  const writeFileCallBack = err => {
    if (err) console.log('error saving sniplist.json file ')
  }
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack)
}

module.exports.getSnipData = (event, doneCallBack) => {
  const filePath = `${dataRoot}SnipData.json`
  const jsonReadCallBack = (err, data) => {
    if (err) doneCallBack(`SnipData readFile error ${filePath}`)
    else {
      const jsonData = JSON.parse(data.toString())
      doneCallBack(event, jsonData)
    }
  }
  fs.readFile(filePath, jsonReadCallBack)
}

module.exports.setSnipData = data => {
  const filePath = `${dataRoot}SnipData.json`
  const writeFileCallBack = err => {
    if (err) console.log('error saving SnipData.json file ')
  }
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack)
}
