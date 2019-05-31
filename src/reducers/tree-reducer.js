import lodash from 'lodash'
import traverse from 'traverse'

let _nextID

function getSetNextNodeID() {
  _nextID += 1
  return _nextID
}

function getSelected(tree) {
  let result = null
  lodash.each(tree, node => {
    if (node.selected) result = node
    if (result == null && node.children && node.children.length > 0)
      result = getSelected(node.children)
  })
  return result
}

function gotTreeView(treedata) {
  let _currentTreeNode = getSelected(treedata)
  // eslint-disable-next-line prefer-destructuring
  if (_currentTreeNode == null) _currentTreeNode = treedata[0]
  return { treeData: treedata, currentTreeNode: _currentTreeNode }
}

function getNodeIndex(_treeData, treeNode) {
  let treeData = _treeData
  const nodeID = treeNode.nodeid
  if (lodash.isEmpty(nodeID)) {
    return []
  }

  const nodeIdArray = nodeID.split('.')
  let searchID = nodeIdArray.shift()
  const nodeIndex = []
  let index
  let nextSearchID

  while (searchID) {
    if (!treeData) {
      return []
    }
    const treeItem = lodash.find(treeData, { nodeid: searchID })
    index = lodash.indexOf(treeData, treeItem)
    if (index < 0) {
      return []
    }
    nodeIndex.push(index)
    nextSearchID = nodeIdArray.shift()
    if (nextSearchID) {
      searchID += `.${nextSearchID}`
      treeData = treeData[index].children
      if (treeData) {
        nodeIndex.push('children')
      }
    } else searchID = nextSearchID
  }

  return nodeIndex
}

function selectTreeNode(_treeData, currentCopy, treeNode) {
  let _currentTreeNode = currentCopy
  const nodeIndex1 = getNodeIndex(_treeData, _currentTreeNode)
  nodeIndex1.push('selected')
  traverse(_treeData).set(nodeIndex1, false)
  _currentTreeNode = treeNode
  const nodeIndex2 = getNodeIndex(_treeData, _currentTreeNode)
  nodeIndex2.push('selected')
  traverse(_treeData).set(nodeIndex2, true)

  return { treeData: _treeData, currentTreeNode: _currentTreeNode }
}

function saveTreeNew(treeData, treeNode, _currentTreeNode, location) {
  let _treeData = treeData.slice(0)
  const newNode = treeNode
  const nodeIndex = getNodeIndex(_treeData, _currentTreeNode)

  const nextNodeID = getSetNextNodeID()
  let newNodeID
  if (location === 'child') {
    newNodeID = `${_currentTreeNode.nodeid}.${nextNodeID}`
  } else {
    const nodeIdArray = _currentTreeNode.nodeid.split('.')
    nodeIdArray.pop()
    if (nodeIdArray.length > 0)
      newNodeID = `${nodeIdArray.join('.')}.${nextNodeID}`
    else newNodeID = `${nextNodeID}`
  }
  newNode.nodeid = newNodeID

  let tIndex
  let children
  let isNotRoot = nodeIndex.length > 1
  if (location === 'child') {
    const nodeIndex2 = getNodeIndex(_treeData, _currentTreeNode)
    nodeIndex2.push('closed')
    traverse(_treeData).set(nodeIndex2, false)
    nodeIndex.push('children')
    children = traverse(_treeData).get(nodeIndex)
    isNotRoot = true
  } else if (isNotRoot) {
    tIndex = nodeIndex.pop()
    children = traverse(_treeData).get(nodeIndex)
  } else {
    ;[tIndex] = nodeIndex
    children = _treeData
  }
  switch (location) {
    case 'before':
      break
    case 'after': {
      const cLength = children.length
      tIndex = tIndex < cLength ? tIndex + 1 : cLength
      break
    }
    case 'child':
      tIndex = 0
      break
    default:
      break
  }
  children.splice(tIndex, 0, Object.assign({}, newNode))
  if (isNotRoot) traverse(_treeData).set(nodeIndex, children)
  else _treeData = children
  const selectTreeNodeData = selectTreeNode(
    _treeData,
    _currentTreeNode,
    newNode
  )
  const returnData = Object.assign(selectTreeNodeData, {
    newNodeID: { nextID: nextNodeID, nodeID: newNodeID }
  })
  return returnData
}

function saveTreeEdit(_treeData, treeNode) {
  const nodeIndex = getNodeIndex(_treeData, treeNode)
  traverse(_treeData).set(nodeIndex, Object.assign({}, treeNode))
  return { treeData: _treeData, currentTreeNode: treeNode, showTreeEdit: false }
}

function moveTreeItem(treeData, currentCopy, action) {
  let _treeData = treeData.slice(0)
  let _currentTreeNode = currentCopy
  const nodeIndex = getNodeIndex(_treeData, _currentTreeNode)
  let tIndex
  let children
  const isNotRoot = nodeIndex.length > 1
  if (isNotRoot) {
    tIndex = nodeIndex.pop()
    children = traverse(_treeData).get(nodeIndex)
  } else {
    ;[tIndex] = nodeIndex
    children = _treeData
  }
  const currentIndex = tIndex
  switch (action) {
    case 'MoveNodeUp':
      tIndex = tIndex > 0 ? tIndex - 1 : 0
      break
    case 'MoveNodeDown': {
      const cLength = children.length
      tIndex = tIndex < cLength ? tIndex + 1 : cLength
      break
    }
    case 'RemoveNode':
      tIndex = tIndex > 0 ? tIndex - 1 : 0
      break
    default:
      break
  }
  if (tIndex !== currentIndex || action === 'RemoveNode') {
    const data = children.splice(currentIndex, 1)
    if (action === 'RemoveNode') {
      const newNode = children[tIndex]
      if (newNode != null) _currentTreeNode = newNode
    } else children.splice(tIndex, 0, data[0])
    if (isNotRoot) traverse(_treeData).set(nodeIndex, children)
    else _treeData = children
  }
  return { treeData: _treeData, currentTreeNode: _currentTreeNode }
}

function setTreeNodeClosed(_treeData, treeNode) {
  const nodeIndex = getNodeIndex(_treeData, treeNode)
  nodeIndex.push('closed')
  let visible = traverse(_treeData).get(nodeIndex)
  if (typeof visible === 'undefined') visible = false
  else visible = !visible
  if (visible) traverse(_treeData).set(nodeIndex, true)
  else traverse(_treeData).set(nodeIndex, false)

  return { treeData: _treeData }
}

const initialTreeState = {
  newNodeID: 0,
  treeData: [{}],
  currentTreeNode: { title: 'not selected' },
  showTreeEdit: false,
  showTreeNew: false
}

export default function handleActions(state = initialTreeState, action) {
  const treeCopy = state.treeData.slice(0)
  const currentCopy = Object.assign({}, state.currentTreeNode)
  switch (action.type) {
    case 'ApiGetTreeDataDone': {
      const gotTreeData = gotTreeView(action.data)
      return { ...state, ...gotTreeData }
    }
    case 'ShowNew':
      return { ...state, showTreeNew: true }
    case 'ShowEdit':
      return { ...state, showTreeEdit: true }
    case 'CancelEdit':
      return { ...state, showTreeEdit: false }
    case 'CancelNew':
      return { ...state, showTreeNew: false }
    case 'MoveNodeUp':
    case 'MoveNodeDown':
    case 'RemoveNode': {
      const moveTreeData = moveTreeItem(treeCopy, currentCopy, action.type)
      return { ...state, ...moveTreeData }
    }
    case 'SelectTreeNode': {
      const selectTreeData = selectTreeNode(treeCopy, currentCopy, action.node)
      return { ...state, ...selectTreeData }
    }
    case 'SetTreeNodeClosed': {
      const closedTreeData = setTreeNodeClosed(treeCopy, action.node)
      return { ...state, ...closedTreeData }
    }
    case 'SaveTreeEdit': {
      const editTreeData = saveTreeEdit(treeCopy, action.node)
      return { ...state, ...editTreeData }
    }
    case 'SaveTreeNew': {
      const newTreeData = saveTreeNew(
        treeCopy,
        action.node,
        currentCopy,
        action.location,
        state.nextID
      )
      newTreeData.showTreeNew = false
      return { ...state, ...newTreeData }
    }
    case 'SetNextNodeID':
      _nextID = action.nodeID
      return state
    default:
      return state
  }
}
