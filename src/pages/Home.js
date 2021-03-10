import React from 'react';
import {useTranslation} from "react-i18next";
import "../translations/i18n"

const Home = () => {

  const { t } = useTranslation();

return(
    <div>

<header className="App-header">
        <h1>{t("index.name")}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
)
}
export default Home;