import React from 'react'

import JButton from '../../common/Button'
import TreeDetail from '../tree-detail'

const newBeforeBtn = {
  buttonid: 'before',
  text: 'New Before',
  assignStyle: { width: '92px' }
}
const newAfterBtn = {
  buttonid: 'after',
  text: 'New After',
  assignStyle: { width: '92px' }
}
const newChildBtn = {
  buttonid: 'child',
  text: 'New Child',
  assignStyle: { width: '92px' }
}
const cancelNewBtn = {
  buttonid: 'cancel',
  text: 'Cancel',
  assignStyle: { width: '92px' }
}

class TreeNew extends React.Component {
  state = {
    treeNode: {
      nodeid: '',
      title: '',
      type: 'dev',
      selected: false,
      children: []
    }
  }

  clickHandler = buttonid => {
    const { saveTreeNew, treeActions } = this.props
    const { treeNode } = this.state
    switch (buttonid) {
      case 'before':
      case 'after':
      case 'child':
        saveTreeNew(treeNode, buttonid)
        break
      case 'cancel':
        treeActions('cancelNew')
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
          <div id="halfNewButtonArea">
            <div id="topButtonArea">
              <JButton
                btn={newBeforeBtn}
                parentClickHandler={this.clickHandler}
              />
              <JButton
                btn={newAfterBtn}
                parentClickHandler={this.clickHandler}
              />
            </div>
            <div id="bottomButtonArea">
              <JButton
                btn={newChildBtn}
                parentClickHandler={this.clickHandler}
              />
              <JButton
                btn={cancelNewBtn}
                parentClickHandler={this.clickHandler}
              />
            </div>
          </div>
        </div>
        <TreeDetail
          treeNode={treeNode}
          name="newNode"
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}

export default TreeNew
