let getClipboardPosition

export function apiGetClipboard(position) {
  getClipboardPosition = position
  return { type: 'ApiGetClipboard' }
}

export function apiGetClipboardDone(clip) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ApiGetClipboardDone',
      clip,
      position: getClipboardPosition
    })
    dispatch({
      type: 'ApiSetSnipData',
      data: { data: getState().SnipState.allSnips }
    })
  }
}

export function apiGetSnipData(data) {
  return { type: 'ApiGetSnipData', data }
}

export function apiGetSnipDataDone(data) {
  return dispatch => {
    dispatch({ type: 'ApiGetSnipDataDone', data })
    dispatch({ type: 'ApiGetTreeData' })
  }
}

export function apiGetTreeDataDone(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'ApiGetTreeDataDone', data })
    dispatch({
      type: 'SelectTreeNode',
      node: getState().TreeState.currentTreeNode
    })
    dispatch({ type: 'SetNextNodeID', nodeID: getState().SnipState.nextNodeID })
  }
}

export function apiSetClipboard(clip) {
  return { type: 'ApiSetClipboard', clip }
}

export function apiSetSnipData(data) {
  return { type: 'ApiSetSnipData', data }
}

export function apiSetTreeData(data) {
  return { type: 'ApiSetTreeData', data }
}
