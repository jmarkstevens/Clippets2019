import lodash from 'lodash';

let _snipsIndex = 0;

function _setCurrentSnips(treeNode, _snipData) {
  const snipsRecord = lodash.find(_snipData.allSnips, { nodeid: treeNode.nodeid });
  _snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord);
  if (snipsRecord.snips.length < 1) _snipData.currentSnips = [{ snip: '', comment: '' }];
  else _snipData.currentSnips = snipsRecord.snips;
  _snipData.currentSnipIndex = 0;
  _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex];
  return _snipData;
}

function _selectSnipItem(snipItem, _snipData) {
  _snipData.currentSnipIndex = lodash.indexOf(_snipData.currentSnips, snipItem);
  _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex];
  return _snipData;
}

function _newSnip(action, clip, _snipData) {
  const newSnip = { snip: clip, comment: '' };
  if (action === 'NewSnipAfter' || action === 'PasteSnipAfter') _snipData.currentSnipIndex += 1;
  _snipData.currentSnips.splice(_snipData.currentSnipIndex, 0, newSnip);
  _snipData.allSnips[_snipsIndex].snips = _snipData.currentSnips;
  _snipData.currentSnip = newSnip;
  return _snipData;
}

function _moveSnipItem(action, _snipData) {
  let tIndex = _snipData.currentSnipIndex;
  switch (action) {
    case 'MoveSnipUp':
      tIndex = tIndex > 0 ? tIndex - 1 : 0;
      break;
    case 'MoveSnipDown': {
      const cLength = _snipData.currentSnips.length - 1;
      tIndex = tIndex < cLength ? tIndex + 1 : cLength;
      break;
    }
    case 'RemoveSnip':
      tIndex = tIndex > 0 ? tIndex - 1 : 0;
      break;
    default: break;
  }
  if (tIndex !== _snipData.currentSnipIndex || action === 'RemoveSnip') {
    const data = _snipData.currentSnips.splice(_snipData.currentSnipIndex, 1);
    if (action !== 'RemoveSnip') _snipData.currentSnips.splice(tIndex, 0, data[0]);
    _snipData.allSnips[_snipsIndex].snips = _snipData.currentSnips;
    _snipData.currentSnipIndex = tIndex;
    _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex];
  }
  return _snipData;
}

function _gotSnipData(_allSnips, _snipData) {
  _snipData.allSnips = _allSnips;
  const snipsRecord = lodash.find(_snipData.allSnips, { nodeid: '001' });
  const snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord);
  _snipData.nextNodeID = _snipData.allSnips[snipsIndex].nextid;
  return _snipData;
}

function _newTreeNode(newNodeID, _snipData) {
  const newSnips = { nodeid: newNodeID.nodeID, snips: [] };
  _snipData.allSnips.push(newSnips);
  let snipsRecord = lodash.find(_snipData.allSnips, { nodeid: '001' });
  const snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord);
  _snipData.allSnips[snipsIndex].nextid = newNodeID.nextID;

  snipsRecord = lodash.find(_snipData.allSnips, { nodeid: newNodeID.nodeID });
  _snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord);
  if (snipsRecord.snips.length < 1) _snipData.currentSnips = [{ snip: '', comment: '' }];
  else _snipData.currentSnips = snipsRecord.snips;
  _snipData.currentSnipIndex = 0;
  _snipData.currentSnip = _snipData.currentSnips[_snipData.currentSnipIndex];
  return _snipData;
}

function _removeSnips(nodeID, _snipData) {
  const snipsRecord = lodash.find(_snipData.allSnips, { nodeid: nodeID });
  const snipsIndex = lodash.indexOf(_snipData.allSnips, snipsRecord);
  _snipData.allSnips.splice(snipsIndex, 1);
  return _snipData;
}

function _saveSnipEdit(newSnip, _snipData) {
  _snipData.currentSnips[_snipData.currentSnipIndex] = newSnip;
  _snipData.allSnips[_snipsIndex].snips = _snipData.currentSnips;
  _snipData.currentSnip = newSnip;
  return _snipData;
}

const initialSnipState = {
  allSnips: [],
  currentSnips: [],
  currentSnip: {},
  currentSnipIndex: 0,
  nextNodeID: 0,
};

export default function handleActions(state = initialSnipState, action) {
  const _snipData = Object.assign({}, state);
  switch (action.type) {
    case 'ApiGetSnipDataDone':
      return _gotSnipData(action.data, _snipData);
    case 'ApiGetClipboardDone':
      return _newSnip(action.position, action.clip, _snipData);
    case 'NewSnipAfter':
    case 'NewSnipBefore':
      return _newSnip(action.type, '', _snipData);
    case 'MoveSnipUp':
    case 'MoveSnipDown':
    case 'RemoveSnip':
      return _moveSnipItem(action.type, _snipData);
    case 'RemoveSnips':
      return _removeSnips(action.nodeid, _snipData);
    case 'SelectTreeNode':
      return _setCurrentSnips(action.node, _snipData);
    case 'SelectSnipItem':
      return _selectSnipItem(action.item, _snipData);
    case 'SaveSnipEdit':
      return _saveSnipEdit(action.item, _snipData);
    case 'NewTreeNode':
      return _newTreeNode(action.nodeid, _snipData);
    default:
      return state;
  }
}
