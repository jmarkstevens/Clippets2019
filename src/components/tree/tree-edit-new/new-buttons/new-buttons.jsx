import React from 'react'
import Button from '@material-ui/core/Button'
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaLevelDownAlt,
  FaRegWindowClose
} from 'react-icons/fa'

const TreeButtons = ({ handleClick }) => (
  <div className="tree-buttons">
    <Button
      className="common-icon-button"
      onClick={() => handleClick('before')}
    >
      <FaRegArrowAltCircleUp className="common-button-icon" />
    </Button>
    <Button className="common-icon-button" onClick={() => handleClick('after')}>
      <FaRegArrowAltCircleDown className="common-button-icon" />
    </Button>
    <Button className="common-icon-button" onClick={() => handleClick('child')}>
      <FaLevelDownAlt className="common-button-icon" />
    </Button>
    <Button
      className="common-icon-button"
      onClick={() => handleClick('cancelNew')}
    >
      <FaRegWindowClose className="common-button-icon" />
    </Button>
  </div>
)

export default TreeButtons
