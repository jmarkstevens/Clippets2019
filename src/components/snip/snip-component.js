import React from 'react'

import SnipButtons from './snip-buttons'
import SnipDetail from './snip-detail'
import SnipList from './snip-list'

const SnipComponent = ({
  apiGetClipboard,
  apiSetClipboard,
  currentSnip,
  currentSnipIndex,
  currentSnips,
  saveSnipEdit,
  selectSnipItem,
  snipActions
}) => (
  <div id="SnipComponent">
    <SnipButtons
      copyHandler={() => apiSetClipboard(currentSnip)}
      pasteHandler={dir => apiGetClipboard(dir)}
      snipActions={snipActions}
    />
    <div className="snip-detail-list-container">
      <SnipList
        apiSetClipboard={apiSetClipboard}
        currentSnipIndex={currentSnipIndex}
        currentSnips={currentSnips}
        selectSnipItem={selectSnipItem}
      />
      <SnipDetail currentSnip={currentSnip} saveSnipEdit={saveSnipEdit} />
    </div>
  </div>
)

export default SnipComponent
