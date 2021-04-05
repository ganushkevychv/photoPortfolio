import React from 'react';
import facebook from '../img/icons/facebook.png'
import linkedin from '../img/icons/linkedin.png'
import gmail from '../img/icons/gmail.png'
import instagram from '../img/icons/instagram.png'
import telephone from '../img/icons/telephone.png'
import {useTranslation} from "react-i18next";
import "../translations/i18n"

const Contacts = () => {

    const { t } = useTranslation();

    return (
            <div className="iconsConteiner">
            <h1>{t("contacts.contact")}</h1>
            <p className="letter">----xxx----</p>
            <p>{t("contacts.answer")}</p>
            <div className="iconSocial">
        <a className="icon" href="https://www.facebook.com/AnastasiiaGanushkevych/" aria-label="Facebook"><img src={facebook} alt="Facebook"/></a>
        <a className="icon" href="https://www.linkedin.com/in/anastasiia-ganushkevych-523695182" aria-label="Linkedin"><img src={linkedin} alt="Linkedin"/></a>
        <a className="icon" href="mailto:ganushkevycha@gmail.com" aria-label="Gmail"><img src={gmail} alt="Gmail"/></a>
        <a className="icon" href="https://www.instagram.com/nastkazgdanska/" aria-label="Instagram"><img src={instagram} alt="Instagram"/></a>
        <a className="icon" href="tel:512-371-168" aria-label="Telephone"><img src={telephone} alt="Telephone"/></a>
      </div>
        </div>
    )
}
export default Contacts;