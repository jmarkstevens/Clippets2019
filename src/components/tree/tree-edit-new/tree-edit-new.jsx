import React from 'react'

import EditButtons from './edit-buttons'
import NewButtons from './new-buttons'
import TreeDetail from '../tree-detail'

const initTreeNode = {
  nodeid: '',
  title: '',
  type: 'dev',
  selected: false,
  children: []
}

class TreeEditNew extends React.Component {
  state = { treeNode: initTreeNode }

  componentDidUpdate = () => {
    const { showTreeEdit, treeNode } = this.props
    if (showTreeEdit) this.setState({ treeNode })
    else this.setState({ treeNode: initTreeNode })
  }

  clickHandler = buttonid => {
    const { saveTreeEdit, saveTreeNew, treeActions } = this.props
    const { treeNode: node } = this.state
    switch (buttonid) {
      case 'before':
      case 'after':
      case 'child':
        saveTreeNew(node, buttonid)
        break
      case 'cancelNew':
        treeActions('cancelNew')
        break
      case 'saveEdit':
        saveTreeEdit(node)
        break
      case 'cancelEdit':
        treeActions('cancelEdit')
        break
      default:
        break
    }
  }

  handleChange = (field, value) => {
    const { treeNode: node } = this.state
    if (field === 'title') node.title = value
    if (field === 'type') node.type = value
    this.setState({ treeNode: node })
  }

  render() {
    const { showTreeEdit, showTreeNew } = this.props
    const { treeNode } = this.state
    return (
      <div className="tree-edit-new">
        {showTreeEdit && <EditButtons clickHandler={this.clickHandler} />}
        {showTreeNew && <NewButtons clickHandler={this.clickHandler} />}
        <TreeDetail
          treeNode={treeNode}
          name="editNode"
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TreeEditNew
