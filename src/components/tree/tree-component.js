import React from 'react'

import TreeList from './tree-list'
import TreeButtons from './tree-buttons'
import TreeEditNew from './tree-edit-new'

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
      {(showTreeEdit || showTreeNew) && (
        <TreeEditNew
          saveTreeEdit={saveTreeEdit}
          saveTreeNew={saveTreeNew}
          showTreeEdit={showTreeEdit}
          showTreeNew={showTreeNew}
          treeActions={treeActions}
          treeNode={currentTreeNode}
        />
      )}
      <TreeList
        selectTreeNode={selectTreeNode}
        setTreeNodeClosed={setTreeNodeClosed}
        treeData={treeData}
      />
    </div>
  )
}

export default TreeComponent
