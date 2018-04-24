import ReactDOM from "react-dom";
import React, {Component} from 'react';
import store from './redux';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import history from './history';
import Root from './components/Root';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";


class App extends React.Component {
  render() {
    return (
      <I18nextProvider i18n={i18n}> 
        <Provider store = {store}>
              <ConnectedRouter history={history}>
                  <Root/>
              </ConnectedRouter>
        </Provider>
      </I18nextProvider>
    );
  }   
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));