import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormattedMessage {...messages.header} />
      </header>
    </div>
  );
}

export default App;
