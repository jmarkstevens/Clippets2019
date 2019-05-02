import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import './app.scss'

import AppStore from './App.Store'
import AppContainer from './containers/app'

ReactDom.render(
  <Provider store={AppStore}>
    <AppContainer />
  </Provider>,
  document.getElementById('react-app')
)
