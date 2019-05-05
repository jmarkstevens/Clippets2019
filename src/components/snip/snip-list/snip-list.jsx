import React from 'react'

import SnipListItem from '../snip-list-item'

const SnipList = ({
  apiSetClipboard,
  currentSnipIndex,
  currentSnips,
  selectSnipItem
}) => {
  const list = currentSnips.map((snip, index) => {
    const key = index + 1
    const isSelected = currentSnipIndex === index
    return (
      <li className="snip-list-li" key={key}>
        <SnipListItem
          apiSetClipboard={apiSetClipboard}
          isSelected={isSelected}
          selectSnipItem={selectSnipItem}
          snippet={snip}
        />
      </li>
    )
  })
  return (
    <div className="snip-list">
      <ul className="snip-list-ul">{list}</ul>
    </div>
  )
}

export default SnipList
