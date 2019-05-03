import * as Actions from './api.actions'

export function ipcMiddleware(store) {
  return next => action => {
    if (ipcRenderer) {
      switch (action.type) {
        case 'ApiGetTreeData':
          ipcRenderer.send('client:GetTreeData', {})
          break
        case 'ApiSetTreeData':
          ipcRenderer.send('client:SetTreeData', action.data)
          break
        case 'ApiGetSnipData':
          ipcRenderer.send('client:GetSnipData', action.data)
          break
        case 'ApiSetSnipData':
          ipcRenderer.send('client:SetSnipData', action.data)
          break
        case 'ApiGetClipboard':
          store.dispatch(Actions.apiGetClipboardDone(clipboard.readText()))
          break
        case 'ApiSetClipboard':
          clipboard.writeText(action.clip)
          break
        default:
          break
      }
    }
    return next(action)
  }
}

export function startIpc(store) {
  ipcRenderer.on('server:GetTreeDataDone', (event, data) => {
    store.dispatch(Actions.apiGetTreeDataDone(data))
  })

  ipcRenderer.on('server:GetSnipDataDone', (event, data) => {
    store.dispatch(Actions.apiGetSnipDataDone(data))
  })
}
