import ReactDOM from "react-dom";
import React, {Component} from 'react';
import store from './redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';
import Root from './components/Root';
// import { I18n, Trans } from 'react-i18next';


class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
            <ConnectedRouter history={history}>
                <Root/>
            </ConnectedRouter>
      </Provider>
    );
  }   
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));