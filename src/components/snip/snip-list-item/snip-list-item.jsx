import React from 'react'
import { FaRegSquare, FaRegWindowClose } from 'react-icons/fa'

const SnipListItem = ({
  apiSetClipboard,
  isSelected,
  selectSnipItem,
  snippet
}) => {
  const snipClickHandler = buttonid => {
    selectSnipItem(snippet)
    if (buttonid === 'SnipBtn') apiSetClipboard(snippet.snip)
  }

  return (
    <div className="snip-list-item">
      <div
        className="snip-list-item-select"
        onClick={snipClickHandler}
        onKeyPress={snipClickHandler}
        role="button"
        tabIndex={0}
      >
        {!isSelected && <FaRegSquare className="snip-button-icon" />}
        {isSelected && <FaRegWindowClose className="snip-button-icon" />}
      </div>
      <div
        className="snip-list-item-snip"
        onClick={() => snipClickHandler('SnipBtn')}
        onKeyPress={() => snipClickHandler('SnipBtn')}
        role="button"
        tabIndex={0}
      >
        {snippet.snip}
      </div>
    </div>
  )
}

export default SnipListItem
