import React from 'react'

import TreeList from './tree-list'
import TreeMenu from './tree-menu'
import TreeEdit from './tree-edit'
import TreeNew from './tree-new'

const TreeComponent = ({
  treeData,
  currentTreeNode,
  showTreeEdit,
  showTreeNew
}) => {
  return (
    <div id="TreeCtrlSty">
      <TreeMenu />
      <TreeList treeData={treeData} />
      {showTreeEdit && <TreeEdit treeNode={currentTreeNode} />}
      {showTreeNew && <TreeNew />}
    </div>
  )
}

export default TreeComponent
