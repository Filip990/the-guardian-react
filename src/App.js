import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

// Reducers
import newsFeedReducer from "./pages/Home/store/newsFeedReducer";
import searchReducer from "./pages/Search/store/searchReducer";
import sectionReducer from "./pages/SectionDetails/store/sectionReducer";
import userReducer from "./store/userReducer";

import sagas from "./store/sagas";

import "./App.css";

// Components
import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import SectionDetails from "./pages/SectionDetails/SectionDetails";
import Search from "./pages/Search/Search";
import PrivateRoute from "./routes/PrivateRoute";
import SignUp from "./pages/SignUp/SignUp";
import LogIn from "./pages/LogIn/LogIn";

//utils
import { ProvideAuth } from "./utils/hooks/useAuth";

// route constants
import * as routes from "./routes/constants";

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      newsFeed: newsFeedReducer,
      searchResults: searchReducer,
      newsBySection: sectionReducer,
      user: userReducer,
    }),
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(sagas);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ProvideAuth>
            <Switch>
              <Route path={routes.LOGIN} component={LogIn} />
              <Route path={routes.SIGNUP} component={SignUp} />
              <PrivateRoute exact path={routes.HOME} component={Home} />
              <PrivateRoute path={routes.SEARCH} component={Search} />
              <PrivateRoute
                path={`${routes.SECTION}:section`}
                component={SectionDetails}
              />
              <PrivateRoute path="/:id" component={Article} />
            </Switch>
          </ProvideAuth>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
