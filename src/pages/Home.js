import React from 'react';
import {useTranslation} from "react-i18next";
import "../translations/i18n"
import CardFamily from '../components/CardFamily'
import CardNature from '../components/CardNature'
import CardKids from '../components/CardKids'
import CardFood from '../components/CardFood'
import CardPortrait from '../components/CardPortrait'
import logo from '../img/images/logo.png'
const Home = (props) => {

  const { t } = useTranslation();

return(
    <div>
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
        <h1>@nastkazgdanska</h1>
        <p>
         {t("index.name")}
        </p>
        <p>
        {t("index.city")}
        </p>
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