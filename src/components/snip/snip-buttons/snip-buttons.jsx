import React from 'react'
import Button from '@material-ui/core/Button'
import {
  FaPaste,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
  FaRegCopy,
  FaRegFileAlt,
  FaTrashAlt
} from 'react-icons/fa'

const SnipButtons = ({ copyHandler, pasteHandler, snipActions }) => (
  <div className="snip-buttons">
    <div className="snip-button-group">
      <Button className="common-icon-button" onClick={copyHandler}>
        <FaRegCopy className="common-button-icon" />
      </Button>
    </div>
    <div className="snip-button-group">
      <Button
        className="common-icon-button"
        onClick={() => snipActions('PasteSnipBefore')}
      >
        <FaPaste className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => pasteHandler('PasteSnipAfter')}
      >
        <FaRegArrowAltCircleDown className="common-button-icon" />
      </Button>
    </div>
    <div className="snip-button-group">
      <Button
        className="common-icon-button"
        onClick={() => snipActions('newBefore')}
      >
        <FaRegFileAlt className="common-button-icon" />
      </Button>
      <Button
        className="common-icon-button"
        onClick={() => snipActions('newAfter')}
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
