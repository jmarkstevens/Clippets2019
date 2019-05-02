import { connect } from 'react-redux'

import { SetWindowDefaults } from '../../actions'
import AppComponent from '../../components/app'
import { getBodyStyle, getCurrentPage, getIsMobile } from '../../selectors'

const mapStateToProps = state => ({
  bodyStyle: getBodyStyle(state),
  currentPage: getCurrentPage(state),
  isMobile: getIsMobile(state)
})

const mapDispatchToProps = dispatch => {
  return {
    SetWindowDefaults: window => {
      dispatch(SetWindowDefaults(window))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)
