import React from 'react'

import TreeList from './tree-list'
import TreeButtons from './tree-buttons'
import TreeEdit from './tree-edit'
import TreeNew from './tree-new'

const TreeComponent = ({
  treeData,
  currentTreeNode,
  selectTreeNode,
  setTreeNodeClosed,
  showTreeEdit,
  showTreeNew,
  treeActions
}) => {
  return (
    <div id="TreeComponent">
      <TreeButtons treeActions={treeActions} />
      <TreeList
        selectTreeNode={selectTreeNode}
        setTreeNodeClosed={setTreeNodeClosed}
        treeData={treeData}
      />
      {showTreeEdit && <TreeEdit treeNode={currentTreeNode} />}
      {showTreeNew && <TreeNew />}
    </div>
  )
}

export default TreeComponent
