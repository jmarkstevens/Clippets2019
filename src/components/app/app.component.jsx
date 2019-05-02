import PropTypes from 'prop-types'
import React from 'react'
import screenfull from 'screenfull'

// import HelpPage from './help/help.page'
import PalmPage from '../../containers/palm-page'

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.appRef = React.createRef()
  }

  componentDidMount = () => {
    const { SetWindowDefaults } = this.props
    SetWindowDefaults(window)
    // const that = this
    // setTimeout(() => {
    //   const { isMobile } = this.props
    //   if (isMobile) {
    //     that.appRef.current.addEventListener('click', that.windowClickHandler)
    //   }
    // }, 2000)
  }

  windowClickHandler = () => {
    if (screenfull.enabled) {
      screenfull.request()
      this.appRef.current.removeEventListener('click', this.windowClickHandler)
    }
  }

  render() {
    const { bodyStyle, currentPage } = this.props

    // const showHelp = currentPage === 'help'
    const showSpecies = currentPage === 'species'
    return (
      <div className="app-container" ref={this.appRef} style={bodyStyle}>
        {/* <HelpPage hide={hideHelp} /> */}
        {showSpecies && <PalmPage />}
      </div>
    )
  }
}

AppComponent.defaultProps = {
  bodyStyle: {},
  SetWindowDefaults: () => null,
  currentPage: ''
}

AppComponent.propTypes = {
  bodyStyle: PropTypes.shape({}),
  SetWindowDefaults: PropTypes.func,
  currentPage: PropTypes.string
}

export default AppComponent
