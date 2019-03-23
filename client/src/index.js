
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'

// React Router
import { Router, Route, Switch } from 'react-router-dom'
import history from './history' // Import history in any component you want to use it
import { routerMiddleware } from 'react-router-redux'

// Root reducer
import rootReducer from './reducers/index'

import * as serviceWorker from './serviceWorker'

// Components
import Homepage from './components/Homepage'
import Dashboard from './components/Dashboard'
import User from './containers/UserEntry'
import CreateGames from './components/CreateGames'
import JoinGameDayTabs from './containers/JoinGameDayTabs'

// Initialize redux store and thunk middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Router middleware
const routing = routerMiddleware(history)

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(routing)))

ReactDOM.render(<Provider store={store}>
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/dashboard' exact component={Dashboard} />
      <Route path='/' exact component={Homepage} />
      <Route path='/user/account' exact component={User} />
      <Route path='/games/create' exact component={CreateGames} />
    </Switch>
  </Router>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
