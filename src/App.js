import React from "react";
import ReactDOM from "react-dom";
import React, {Component} from 'react';
import Root from './components/Root'
import store from './redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';
import Root from './components/Root';

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <DragDropContextProvider backend={HTML5Backend}>
            <ConnectedRouter history={history}>
                <Root/>
            </ConnectedRouter>
        </DragDropContextProvider>
      </Provider>
    );
  }   
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));