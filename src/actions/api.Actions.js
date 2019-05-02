export function apiSetTreeData(data) {
  return { type: 'ApiSetTreeData', data };
}

export function apiGetTreeDataDone(data) {
  return (dispatch, getState) => {
    dispatch({ type: 'ApiGetTreeDataDone', data });
    dispatch({ type: 'SelectTreeNode', node: getState().treeData.currentTreeNode });
    dispatch({ type: 'SetNextNodeID', nodeID: getState().snipData.nextNodeID });
  };
}

export function apiGetSnipData(data) {
  return { type: 'ApiGetSnipData', data };
}

export function apiSetSnipData(data) {
  return { type: 'ApiSetSnipData', data };
}

export function apiGetSnipDataDone(data) {
  return (dispatch) => {
    dispatch({ type: 'ApiGetSnipDataDone', data });
    dispatch({ type: 'ApiGetTreeData' });
  };
}

let getClipboardPosition;

export function apiGetClipboard(position) {
  getClipboardPosition = position;
  return { type: 'ApiGetClipboard' };
}

export function apiSetClipboard(clip) {
  return { type: 'ApiSetClipboard', clip };
}

export function apiGetClipboardDone(clip) {
  return (dispatch, getState) => {
    dispatch({ type: 'ApiGetClipboardDone', clip, position: getClipboardPosition });
    dispatch({ type: 'ApiSetSnipData', data: { data: getState().snipData.allSnips } });
  };
}
