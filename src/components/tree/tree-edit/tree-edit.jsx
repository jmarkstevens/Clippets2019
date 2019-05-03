import React from 'react'
import JButton from '../../common/Button'

import TreeDetail from '../tree-detail'

const saveEditBtn = { buttonid: 'save', text: 'Save' }
const cancelEditBtn = { buttonid: 'cancel', text: 'Cancel' }

class TreeEdit extends React.Component {
  state = {
    treeNode: {
      nodeid: '',
      children: [],
      title: '',
      type: ''
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ treeNode: nextProps.treeNode })
  }

  clickHandler = buttonid => {
    const { treeNode: node } = this.state
    const { saveTreeEdit, treeActions } = this.props
    switch (buttonid) {
      case 'save':
        saveTreeEdit(node)
        break
      case 'cancel':
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
    const { treeNode } = this.state
    return (
      <div id="treeNewEdit">
        <div id="buttonArea">
          <JButton btn={saveEditBtn} parentClickHandler={this.clickHandler} />
          <JButton btn={cancelEditBtn} parentClickHandler={this.clickHandler} />
        </div>
        <TreeDetail
          treeNode={treeNode}
          name="editNode"
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TreeEdit
