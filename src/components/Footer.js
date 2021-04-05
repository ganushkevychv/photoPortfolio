import React from 'react'
import facebook from '../img/icons/facebook.png'
import linkedin from '../img/icons/linkedin.png'
import gmail from '../img/icons/gmail.png'
import instagram from '../img/icons/instagram.png'
import telephone from '../img/icons/telephone.png'
import {useTranslation} from "react-i18next";
import "../translations/i18n"

const Footer = () => {

  const { t } = useTranslation();

    return (
        <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span>{t("footer.about")}</span>{t("footer.text")}
    </p>
    <div className="icons">
    <a href="https://www.facebook.com/AnastasiiaGanushkevych/" aria-label="Facebook"><img src={facebook} alt="Facebook"/></a>
        <a href="https://www.linkedin.com/in/anastasiia-ganushkevych-523695182" aria-label="Linkedin"><img src={linkedin} alt="Linkedin"/></a>
        <a href="mailto:ganushkevycha@gmail.com" aria-label="Gmail"><img src={gmail} alt="Gmail"/></a>
        <a href="https://www.instagram.com/nastkazgdanska/" aria-label="Instagram"><img src={instagram} alt="Instagram"/></a>
        <a href="tel:512-371-168" aria-label="Telephone"><img src={telephone} alt="Telephone"/></a>
      </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span></span>{t("footer.address")}</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <a href="tel:512-371-168" aria-label="Telephone"><p> (+48) 512 371 168</p></a>
    </div>
    <div>
      <p><a href="mailto:ganushkevycha@gmail.com" aria-label="Mail me"> ganushkevycha@gmail.com</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> <span>@</span>nastkazgdanska</h2>
    <p className="menu">
  
      <a href="#CardPortrait">{t("menu.gallery")}</a>
    </p>
    <p className="name"> @nastkazgdanska &copy; {new Date().getFullYear()}</p>
  </div>
</footer>
    )
}
export default Footer