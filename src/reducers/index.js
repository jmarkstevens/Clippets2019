import { combineReducers } from 'redux'

import SnipState from './snip.reducer'
import TreeState from './tree.reducer'

export default combineReducers({ SnipState, TreeState })
