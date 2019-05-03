import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { startIpc, ipcMiddleware } from './actions'
import CombinedState from './reducers'

const middleware = [ipcMiddleware, thunkMiddleware]

const useLogger = 1
if (useLogger) middleware.push(logger)

const store = createStore(CombinedState, applyMiddleware(...middleware))

startIpc(store)
store.dispatch({ type: 'ApiGetSnipData' })

export default store
