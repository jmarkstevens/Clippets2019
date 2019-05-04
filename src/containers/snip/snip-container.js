import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SnipComponent from '../../components/snip'
import {
  apiGetClipboard,
  apiSetClipboard,
  saveSnipEdit,
  selectSnipItem,
  snipActions
} from '../../actions'
import {
  getCurrentSnip,
  getCurrentSnipIndex,
  getCurrentSnips
} from '../../selectors'

const mapStateToProps = state => ({
  currentSnip: getCurrentSnip(state),
  currentSnipIndex: getCurrentSnipIndex(state),
  currentSnips: getCurrentSnips(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      apiGetClipboard,
      apiSetClipboard,
      saveSnipEdit,
      selectSnipItem,
      snipActions
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnipComponent)
