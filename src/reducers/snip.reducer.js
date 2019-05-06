import lodash from 'lodash'

let _snipsIndex = 0

function setCurrentSnips(treeNode, snipState) {
  const _snipData = snipState
  const snipsRecord = lodash.find(_snipData.allSnips, {
    nodeid: treeNode.nodeid
  })
  _snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord)
  if (snipsRecord.snips.length < 1)
    _snipData.currentSnips = [{ snip: '', comment: '' }]
  else _snipData.currentSnips = snipsRecord.snips
  _snipData.currentSnipIndex = 0
  _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex]
  return _snipData
}

function selectSnipItem(snipItem, snipState) {
  const _snipData = snipState
  _snipData.currentSnipIndex = lodash.indexOf(_snipData.currentSnips, snipItem)
  _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex]
  return _snipData
}

function setNewSnip(action, clip, snipState) {
  const _snipData = snipState
  const newSnip = { snip: clip, comment: '' }
  if (action === 'NewSnipAfter' || action === 'PasteSnipAfter')
    _snipData.currentSnipIndex += 1
  _snipData.currentSnips.splice(_snipData.currentSnipIndex, 0, newSnip)
  _snipData.allSnips[_snipsIndex].snips = _snipData.currentSnips
  _snipData.currentSnip = newSnip
  return _snipData
}

function moveSnipItem(action, snipState) {
  const _snipData = snipState
  let tIndex = _snipData.currentSnipIndex
  switch (action) {
    case 'MoveSnipUp':
      tIndex = tIndex > 0 ? tIndex - 1 : 0
      break
    case 'MoveSnipDown': {
      const cLength = _snipData.currentSnips.length - 1
      tIndex = tIndex < cLength ? tIndex + 1 : cLength
      break
    }
    case 'RemoveSnip':
      tIndex = tIndex > 0 ? tIndex - 1 : 0
      break
    default:
      break
  }
  if (tIndex !== _snipData.currentSnipIndex || action === 'RemoveSnip') {
    const data = _snipData.currentSnips.splice(_snipData.currentSnipIndex, 1)
    if (action !== 'RemoveSnip')
      _snipData.currentSnips.splice(tIndex, 0, data[0])
    _snipData.allSnips[_snipsIndex].snips = _snipData.currentSnips
    _snipData.currentSnipIndex = tIndex
    _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex]
  }
  return _snipData
}

function gotSnipData(_allSnips, snipState) {
  const _snipData = snipState
  _snipData.allSnips = _allSnips
  const snipsRecord = lodash.find(_snipData.allSnips, { nodeid: '001' })
  const snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord)
  _snipData.nextNodeID = _snipData.allSnips[snipsIndex].nextid
  return _snipData
}

function newTreeNode(newNodeID, snipState) {
  const _snipData = snipState
  const newSnips = { nodeid: newNodeID.nodeID, snips: [] }
  _snipData.allSnips.push(newSnips)
  let snipsRecord = lodash.find(_snipData.allSnips, { nodeid: '001' })
  const snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord)
  _snipData.allSnips[snipsIndex].nextid = newNodeID.nextID

  snipsRecord = lodash.find(_snipData.allSnips, { nodeid: newNodeID.nodeID })
  _snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord)
  if (snipsRecord.snips.length < 1)
    _snipData.currentSnips = [{ snip: '', comment: '' }]
  else _snipData.currentSnips = snipsRecord.snips
  _snipData.currentSnipIndex = 0
  _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex]
  return _snipData
}

function removeSnips(nodeID, snipState) {
  const _snipData = snipState
  const snipsRecord = lodash.find(_snipData.allSnips, { nodeid: nodeID })
  const snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord)
  _snipData.allSnips.splice(snipsIndex, 1)
  return _snipData
}

function saveSnipEdit(newSnip, snipState) {
  const _snipData = snipState
  _snipData.currentSnips[_snipData.currentSnipIndex] = newSnip
  _snipData.allSnips[_snipsIndex].snips = _snipData.currentSnips
  _snipData.currentSnip = newSnip
  return _snipData
}

const initialSnipState = {
  allSnips: [],
  currentSnips: [],
  currentSnip: {},
  currentSnipIndex: 0,
  nextNodeID: 0
}

export default function handleActions(state = initialSnipState, action) {
  const snipState = Object.assign({}, state)
  switch (action.type) {
    case 'ApiGetSnipDataDone':
      return gotSnipData(action.data, snipState)
    case 'ApiGetClipboardDone':
      return setNewSnip(action.position, action.clip, snipState)
    case 'NewSnipAfter':
    case 'NewSnipBefore':
      return setNewSnip(action.type, '', snipState)
    case 'MoveSnipUp':
    case 'MoveSnipDown':
    case 'RemoveSnip':
      return moveSnipItem(action.type, snipState)
    case 'RemoveSnips':
      return removeSnips(action.nodeid, snipState)
    case 'SelectTreeNode':
      return setCurrentSnips(action.node, snipState)
    case 'SelectSnipItem':
      return selectSnipItem(action.item, snipState)
    case 'SaveSnipEdit':
      return saveSnipEdit(action.item, snipState)
    case 'NewTreeNode':
      return newTreeNode(action.nodeid, snipState)
    default:
      return state
  }
}
