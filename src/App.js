import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import newsFeedReducer from "./pages/Home/store/newsFeedReducer";
import { watchFeedSaga } from "./pages/Home/store/sagas";
import "./App.css";

import Home from "./pages/Home/Home";
import Article from "./pages/Article/Article";
import Header from "./components/Header/Header";
import SectionDetails from "./pages/SectionDetails/SectionDetails";
function App() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(newsFeedReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(watchFeedSaga);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/section/:section" component={SectionDetails} />
            <Route path="/:id" component={Article} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
