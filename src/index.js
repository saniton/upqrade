// index.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './translation/en/global.json';
import global_es from './translation/es/global.json';
import global_fr from './translation/fr/global.json';

i18next.init({
  interpolation: { escapeValue: true },
  lng: localStorage.getItem('i18nextLng') || 'en',
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
    fr: {
      global: global_fr,
    },
  },
});

const Root = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);


  const handleLanguageChange = (lang) => {
    i18next.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
        </I18nextProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
reportWebVitals();
