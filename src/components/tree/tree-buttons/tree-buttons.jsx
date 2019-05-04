import React from 'react'
import Button from '@material-ui/core/Button'
import {
  FaArrowDown,
  FaArrowUp,
  FaPencilAlt,
  FaRegFileAlt,
  FaTrashAlt
} from 'react-icons/fa'

const TreeMenu = ({ treeActions }) => (
  <div className="tree-menu">
    <Button className="common-icon-button" onClick={() => treeActions('new')}>
      <FaRegFileAlt className="common-button-icon" />
    </Button>
    <Button className="common-icon-button" onClick={() => treeActions('edit')}>
      <FaPencilAlt className="common-button-icon" />
    </Button>
    <Button
      className="common-icon-button"
      onClick={() => treeActions('moveUp')}
    >
      <FaArrowUp className="common-button-icon" />
    </Button>
    <Button
      className="common-icon-button"
      onClick={() => treeActions('moveDown')}
    >
      <FaArrowDown className="common-button-icon" />
    </Button>
    <Button
      className="common-icon-button"
      onClick={() => treeActions('remove')}
    >
      <FaTrashAlt className="common-button-icon" />
    </Button>
  </div>
)

export default TreeMenu
