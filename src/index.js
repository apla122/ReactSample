import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { MuiThemeProvider } from '@material-ui/core/styles'

import configureStore from './store/configureStore'
// import { getRoutes } from './routes'
import routes from './routes'

let state = window.__initialState__
const store = configureStore(browserHistory, state)
const history = syncHistoryWithStore(browserHistory, store)
// const routes = getRoutes(store)

render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
  document.getElementById("root")
)