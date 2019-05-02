'use strict';

const getSetJson = require('./socket/getsetdata');
const getSetClipboard = require('./socket/getsetclipboard');

module.exports = function(socket) {
  console.log('Socket.io connection made.');

  const getClipboardDone = function(data){ socket.emit('server:GetClipboardDone', data); };
  const onGetClipboard = function() { getSetClipboard.getClipboard(getClipboardDone); };
  socket.on('client:GetClipboard', onGetClipboard);

  const onSetClipboard = function(data) { getSetClipboard.setClipboard(data); };
  socket.on('client:SetClipboard', onSetClipboard);

  const getSnipDataDone = function(event, data){ socket.emit('server:GetSnipDataDone', data); };
  const onGetSnipData = function() { getSetJson.getSnipData(null, getSnipDataDone); };
  socket.on('client:GetSnipData', onGetSnipData);

  const onSetSnipData = function(data) { getSetJson.setSnipData(data); };
  socket.on('client:SetSnipData', onSetSnipData);

  const getTreeDataDone = function(event, data){ socket.emit('server:GetTreeDataDone', data); };
  const onGetTreeData = function() { getSetJson.getTreeData(null, getTreeDataDone); };
  socket.on('client:GetTreeData', onGetTreeData);

  const onSetTreeData = function(data) { getSetJson.setTreeData(data); };
  socket.on('client:SetTreeData', onSetTreeData);
};
