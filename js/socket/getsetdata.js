'use strict';

const fs = require('fs');
const config = require('../../config.json');

let configRoot;
switch (process.platform) {
  case 'darwin':
    configRoot = process.env.HOME + config.darwin.dataRoot;
    break;
  case 'linux':
    configRoot = config.linux.dataRoot;
    break;
  case 'win32':
    configRoot = process.env.USERPROFILE + config.win32.dataRoot;
    break;
}

let dataRoot = configRoot;

module.exports.getTreeData = function(event, doneCallBack) {
  const filePath = dataRoot + 'TreeData.json';
  const jsonReadCallBack = function(err, data) {
    if (err) doneCallBack('treedata readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(event, jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setTreeData = function(data) {
  const filePath = dataRoot + 'TreeData.json';
  const writeFileCallBack = function(err) {
    if (err) console.log('error saving sniplist.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack);
};

module.exports.getSnipData = function(event, doneCallBack) {
  const filePath = dataRoot + 'SnipData.json';
  const jsonReadCallBack = function(err, data) {
    if (err) doneCallBack('SnipData readFile error ' + filePath);
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(event, jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setSnipData = function(data) {
  const filePath = dataRoot + 'SnipData.json';
  const writeFileCallBack = function(err) {
    if (err) console.log('error saving SnipData.json file ');
  };
  fs.writeFile(filePath, JSON.stringify(data.data, null, 2), writeFileCallBack);
};
