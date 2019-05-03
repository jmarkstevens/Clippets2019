export function saveTreeEdit(node) {
  return (dispatch, getState) => {
    dispatch({ type: 'SaveTreeEdit', node })
    dispatch({
      type: 'ApiSetTreeData',
      data: { data: getState().TreeState.treeData }
    })
  }
}

export function saveTreeNew(node, location) {
  return (dispatch, getState) => {
    dispatch({ type: 'SaveTreeNew', node, location })
    dispatch({
      type: 'ApiSetTreeData',
      data: { data: getState().TreeState.treeData }
    })
    dispatch({ type: 'NewTreeNode', nodeid: getState().TreeState.newNodeID })
    dispatch({
      type: 'ApiSetSnipData',
      data: { data: getState().SnipState.allSnips }
    })
  }
}

export function selectTreeNode(node) {
  return (dispatch, getState) => {
    dispatch({ type: 'SelectTreeNode', node })
    dispatch({
      type: 'ApiSetTreeData',
      data: { data: getState().TreeState.treeData }
    })
  }
}

export function setTreeNodeClosed(node) {
  return (dispatch, getState) => {
    dispatch({ type: 'SetTreeNodeClosed', node })
    dispatch({
      type: 'ApiSetTreeData',
      data: { data: getState().TreeState.treeData }
    })
  }
}

export function treeChangeActions(action) {
  return (dispatch, getState) => {
    switch (action) {
      case 'moveUp':
        dispatch({ type: 'MoveNodeUp' })
        break
      case 'moveDown':
        dispatch({ type: 'MoveNodeDown' })
        break
      case 'remove': {
        const oldNodeID = getState().TreeState.currentTreeNode.nodeid
        dispatch({ type: 'RemoveNode' })
        dispatch({ type: 'RemoveSnips', nodeid: oldNodeID })
        dispatch({
          type: 'ApiSetSnipData',
          data: { data: getState().SnipState.allSnips }
        })
        dispatch({
          type: 'SelectTreeNode',
          node: getState().TreeState.currentTreeNode
        })
        break
      }
      default:
        break
    }
    dispatch({
      type: 'ApiSetTreeData',
      data: { data: getState().TreeState.treeData }
    })
  }
}

export function treeActions(action) {
  switch (action) {
    case 'new':
      return { type: 'ShowNew' }
    case 'edit':
      return { type: 'ShowEdit' }
    case 'cancelEdit':
      return { type: 'CancelEdit' }
    case 'cancelNew':
      return { type: 'CancelNew' }
    default:
      return treeChangeActions(action)
  }
}
