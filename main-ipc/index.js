/* eslint-disable no-console */
const { getJson, setJson } = require('./get-set-json')

module.exports = ipc => {
  console.log('mainipc called.')

  const getSnipDataDone = (event, data) => {
    event.sender.send('server:GetSnipDataDone', data)
  }
  const onGetSnipData = event => {
    getJson('SnipData', event, getSnipDataDone)
  }
  ipc.on('client:GetSnipData', onGetSnipData)

  const onSetSnipData = (event, data) => {
    setJson('SnipData', data)
  }
  ipc.on('client:SetSnipData', onSetSnipData)

  const getTreeDataDone = (event, data) => {
    event.sender.send('server:GetTreeDataDone', data)
  }
  const onGetTreeData = event => {
    getJson('TreeData', event, getTreeDataDone)
  }
  ipc.on('client:GetTreeData', onGetTreeData)

  const onSetTreeData = (event, data) => {
    setJson('TreeData', data)
  }
  ipc.on('client:SetTreeData', onSetTreeData)
}
