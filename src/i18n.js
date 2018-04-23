import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
// import json from '';

i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    interpolation: {
      //escapeValue: false, // not needed for react!!
    },
    react: {
    //   defaultTransParent: 'div', // needed for preact
      wait: true
    },
    // resources: './dictionary.json'
  });


export default i18n;