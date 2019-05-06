import React from 'react'
import Button from '@material-ui/core/Button'
import { FaRegSave, FaRegWindowClose } from 'react-icons/fa'

const TreeButtons = ({ handleClick }) => (
  <div className="tree-buttons">
    <Button
      className="common-icon-button"
      onClick={() => handleClick('saveEdit')}
    >
      <FaRegSave className="common-button-icon" />
    </Button>
    <Button
      className="common-icon-button"
      onClick={() => handleClick('cancelEdit')}
    >
      <FaRegWindowClose className="common-button-icon" />
    </Button>
  </div>
)

export default TreeButtons
