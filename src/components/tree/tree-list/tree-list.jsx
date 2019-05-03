import React from 'react'
import JTreeView from '../../common/TreeView'

const TreeList = props => {
  const { treeData } = props
  const iconHandler = node => {
    props.setTreeNodeClosed(node)
  }
  const clickHandler = node => {
    props.selectTreeNode(node)
  }
  const options = {
    icon: { sun: 'dev', leaf: 'home', snow: 'sys' },
    typeName: ['node', 'type']
  }
  return (
    <div>
      <JTreeView
        data={treeData}
        options={options}
        iconClick={iconHandler}
        titleClick={clickHandler}
      />
    </div>
  )
}

export default TreeList
