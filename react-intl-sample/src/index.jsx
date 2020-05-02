import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import LanguageProvider from "./containers/LanguageProvider";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { DEFAULT_LOCALE, translationMessages } from "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider locale={DEFAULT_LOCALE} messages={translationMessages}>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
