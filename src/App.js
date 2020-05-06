import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import newsFeedReducer from "./pages/Home/store/newsFeedReducer";
import searchReducer from "./pages/Search/store/searchReducer";
import sectionReducer from "./pages/SectionDetails/store/sectionReducer";
import sagas from "./store/sagas";
import "./App.css";

import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Header from "./components/Header/Header";
import SectionDetails from "./pages/SectionDetails/SectionDetails";
import Search from "./pages/Search/Search";

function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({
      newsFeed: newsFeedReducer,
      searchResults: searchReducer,
      newsBySection: sectionReducer,
    }),
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(sagas);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/section/:section" component={SectionDetails} />
            <Route path="/:id" component={Article} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
