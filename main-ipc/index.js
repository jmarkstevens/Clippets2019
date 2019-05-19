/* eslint-disable no-console */
const getSetJson = require('./get-set-data')

module.exports = ipc => {
  console.log('mainipc called.')

  const getSnipDataDone = (event, data) => {
    event.sender.send('server:GetSnipDataDone', data)
  }
  const onGetSnipData = event => {
    getSetJson.getSnipData(event, getSnipDataDone)
  }
  ipc.on('client:GetSnipData', onGetSnipData)

  const onSetSnipData = (event, data) => {
    getSetJson.setSnipData(data)
  }
  ipc.on('client:SetSnipData', onSetSnipData)

  const getTreeDataDone = (event, data) => {
    event.sender.send('server:GetTreeDataDone', data)
  }
  const onGetTreeData = event => {
    getSetJson.getTreeData(event, getTreeDataDone)
  }
  ipc.on('client:GetTreeData', onGetTreeData)

  const onSetTreeData = (event, data) => {
    getSetJson.setTreeData(data)
  }
  ipc.on('client:SetTreeData', onSetTreeData)
}
