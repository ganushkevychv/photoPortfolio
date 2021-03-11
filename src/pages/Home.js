import React from 'react';
import {useTranslation} from "react-i18next";
import "../translations/i18n"
import CardFamily from '../components/CardFamily'
import CardNature from '../components/CardNature'
import CardKids from '../components/CardKids'
import CardFood from '../components/CardFood'
import CardPortrait from '../components/CardPortrait'
const Home = (props) => {

  const { t } = useTranslation();

return(
    <div>
<header className="App-header">
        <h1>@nastkazgdanska</h1>
        <p>
         {t("index.slogan")}
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
      <div className="carousel">
      <CardFood/>
      </div>
      <div>
        <CardPortrait/>
      </div>
      </div>
)
}
export default Home;