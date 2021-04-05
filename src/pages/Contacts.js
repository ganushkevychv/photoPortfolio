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
        <a className="icon" href="https://www.facebook.com/AnastasiiaGanushkevych/"><img src={facebook}/></a>
        <a className="icon" href="https://www.linkedin.com/in/anastasiia-ganushkevych-523695182"><img src={linkedin}/></a>
        <a className="icon" href="mailto:ganushkevycha@gmail.com"><img src={gmail}/></a>
        <a className="icon" href="https://www.instagram.com/nastkazgdanska/"><img src={instagram}/></a>
        <a className="icon" href="tel:512-371-168"><img src={telephone}/></a>
      </div>
        </div>
    )
}
export default Contacts;