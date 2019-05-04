import React from 'react'
import Button from '@material-ui/core/Button'
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaPencilAlt,
  FaRegFileAlt,
  FaTrashAlt
} from 'react-icons/fa'

const SnipButtons = ({ snipActions }) => (
  <div className="snip-buttons">
    <div className="snip-button-group">
      <Button
        className="common-icon-button"
        onClick={() => snipActions('edit')}
      >
        <FaPencilAlt className="common-button-icon" />
      </Button>
    </div>
    <div className="snip-button-group">
      <Button
        className="common-icon-button"
        onClick={() => snipActions('edit')}
      >
        <FaPencilAlt className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => snipActions('moveUp')}
      >
        <FaRegArrowAltCircleUp className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => snipActions('moveDown')}
      >
        <FaRegArrowAltCircleDown className="common-button-icon" />
      </Button>
    </div>
    <div className="snip-button-group">
      <Button className="common-icon-button" onClick={() => snipActions('new')}>
        <FaRegFileAlt className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => snipActions('moveUp')}
      >
        <FaRegArrowAltCircleUp className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => snipActions('moveDown')}
      >
        <FaRegArrowAltCircleDown className="common-button-icon" />
      </Button>
    </div>
    <div className="snip-button-group">
      <Button
        className="common-icon-button"
        onClick={() => snipActions('moveUp')}
      >
        <FaRegArrowAltCircleUp className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => snipActions('moveDown')}
      >
        <FaRegArrowAltCircleDown className="common-button-icon" />
      </Button>
    </div>
    <div className="snip-button-group">
      <Button
        className="common-icon-button"
        onClick={() => snipActions('remove')}
      >
        <FaTrashAlt className="common-button-icon" />
      </Button>
    </div>
  </div>
)

export default SnipButtons
