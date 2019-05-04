import React from 'react'

import SnipButtons from './snip-buttons'

const SnipComponent = ({
  apiGetClipboard,
  apiSetClipboard,
  currentSnip,
  snipActions
}) => (
  <div id="SnipComponent">
    <SnipButtons
      copyHandler={() => apiSetClipboard(currentSnip)}
      pasteHandler={dir => apiGetClipboard(dir)}
      snipActions={snipActions}
    />
  </div>
)

export default SnipComponent
