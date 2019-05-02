'use strict';

const ncp = require('copy-paste');

module.exports.getClipboard = function(doneCallBack) {
  const pasteCallBack = function(err, data) { doneCallBack(data); };
  ncp.paste(pasteCallBack);
};

module.exports.setClipboard = function(data) { ncp.copy(data); };
