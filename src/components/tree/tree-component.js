import React from 'react'

import TreeList from './tree-list'
import TreeButtons from './tree-buttons'
import TreeEdit from './tree-edit'
import TreeNew from './tree-new'

const TreeComponent = ({
  treeData,
  currentTreeNode,
  saveTreeEdit,
  saveTreeNew,
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
      {showTreeEdit && (
        <TreeEdit
          saveTreeEdit={saveTreeEdit}
          treeActions={treeActions}
          treeNode={currentTreeNode}
        />
      )}
      {showTreeNew && (
        <TreeNew saveTreeNew={saveTreeNew} treeActions={treeActions} />
      )}
    </div>
  )
}

export default TreeComponent
