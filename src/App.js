import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./store";

import "./App.css";
import TodoList from "./views/todoList";

class MainComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={TodoList} />
        </Switch>
      </BrowserRouter>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route component={MainComponent} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
