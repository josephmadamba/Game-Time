import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// React Router
import { Router, Route, Switch } from "react-router-dom";
import history from "./history"; // Import history in any component you want to use it
import { routerMiddleware } from "react-router-redux";

// Router middleware
const routing = routerMiddleware(history);

// Root reducer
import rootReducer from "./reducers/index";

// Components
import Homepage from "./components/containers/HomepageContainer";

// Initialize redux store and thunk middleware
const store = createStore(rootReducer, applyMiddleware(routing));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Homepage} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
