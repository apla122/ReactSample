import React from 'react'
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/lib/createBrowserHistory'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import configureStore from './store/configureStore'
// import { getRoutes } from './routes'
import { getRoutes } from './routes'
import registerServiceWorker from './registerServiceWorker'

let basename = "/"
console.log("NODE_ENV : " + process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  basename = "/ReactSample/"
}
const browserHistory = useRouterHistory(createHistory)({
  basename: basename
})

const state = window.__initialState__
const store = configureStore(browserHistory, state)
const routes = getRoutes(store)
const history = syncHistoryWithStore(browserHistory, store)
const persistor = persistStore(store)

// persistor.purge() これを実行すると、Storageに保存された情報がクリアされる

render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <Router history={history} routes={routes} />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker();
