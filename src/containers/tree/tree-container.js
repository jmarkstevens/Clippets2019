import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TreeComponent from '../../components/tree'
import {
  saveTreeEdit,
  saveTreeNew,
  selectTreeNode,
  setTreeNodeClosed,
  treeActions
} from '../../actions'
import {
  getCurrentTreeNode,
  getShowTreeEdit,
  getShowTreeNew,
  getTreeData
} from '../../selectors'

const mapStateToProps = state => ({
  currentTreeNode: getCurrentTreeNode(state),
  showTreeEdit: getShowTreeEdit(state),
  showTreeNew: getShowTreeNew(state),
  treeData: getTreeData(state)
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      saveTreeEdit,
      saveTreeNew,
      selectTreeNode,
      setTreeNodeClosed,
      treeActions
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeComponent)
