import React from 'react'
import facebook from '../img/icons/facebook.png'
import linkedin from '../img/icons/linkedin.png'
import gmail from '../img/icons/gmail.png'
import instagram from '../img/icons/instagram.png'
import telephone from '../img/icons/telephone.png'

const IconsSocial = () =>{
    return(
        
        <div className="icons">
        <a href="https://www.facebook.com/AnastasiiaGanushkevych/"><img src={facebook}/></a>
        <a href="https://www.linkedin.com/in/anastasiia-ganushkevych-523695182"><img src={linkedin}/></a>
        <a href="mailto:ganushkevycha@gmail.com"><img src={gmail}/></a>
        <a href="https://www.instagram.com/nastkazgdanska/"><img src={instagram}/></a>
        <a href="tel:512-371-168"><img src={telephone}/></a>
      </div>
        
    )
}
export default IconsSocial;