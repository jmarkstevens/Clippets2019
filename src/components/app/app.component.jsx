import React from 'react'

// import HelpPage from './help/help.page'

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.appRef = React.createRef()
  }

  render() {
    return (
      <div className="app-container" ref={this.appRef}>
        Hello Electron World
      </div>
    )
  }
}

export default AppComponent
