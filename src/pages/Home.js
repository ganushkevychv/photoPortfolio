import React from 'react';
import {useTranslation} from "react-i18next";
import "../translations/i18n"
import CardFamily from '../components/CardFamily'
import CardNature from '../components/CardNature'
import CardKids from '../components/CardKids'

const Home = (props) => {

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

      <div className="cardFamily">
        <CardFamily/>
      </div>
      <div className="cardFamily">
      <CardNature/>
      </div>
      <div className="cardFamily">
      <CardKids/>
      </div>
      </div>
)
}
export default Home;