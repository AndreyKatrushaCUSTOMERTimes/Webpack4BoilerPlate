import React, { Component } from 'react'
import { I18n, Trans } from 'react-i18next';

export default class Root extends Component {
    render () {
        return(   <I18n ns="translations">
        {
          (t, { i18n }) => (
            <div className="App">
              <div className="App-header">
                <h2>{t('title')}</h2>
                <button onClick={() => i18n.changeLanguage('de')}>de</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
              </div>
              <div className="App-intro">
                <Trans i18nKey="description.part1">
                  To get started, edit <code>src/App.js</code> and save to reload.
                  aaaaa
                </Trans>
              </div>
              <div>{t('description.part2')}</div>
            </div>
          )
        }
      </I18n>);
    }
}