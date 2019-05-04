import React from 'react'

import SnipContainer from '../../containers/snip'
import TreeContainer from '../../containers/tree'

const AppComponent = () => {
  return (
    <div className="app-container">
      <div className="tree-container">
        <TreeContainer />
      </div>
      <div className="snips-container">
        <SnipContainer />
      </div>
    </div>
  )
}

export default AppComponent
