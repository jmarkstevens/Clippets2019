import React from 'react'

import SnipsContainer from '../../containers/snips'
import TreeContainer from '../../containers/tree'

const AppComponent = () => {
  return (
    <div className="app-container">
      <div className="tree-container">
        <TreeContainer />
      </div>
      <div className="snips-container">
        <SnipsContainer />
      </div>
    </div>
  )
}

export default AppComponent
