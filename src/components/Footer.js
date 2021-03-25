import React from 'react'
import facebook from '../img/icons/facebook.png'
import linkedin from '../img/icons/linkedin.png'
import gmail from '../img/icons/gmail.png'
import instagram from '../img/icons/instagram.png'
import telephone from '../img/icons/telephone.png'

const Footer = () => {
    return (
        <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
    </p>
    <div class="icons">
      <a href="https://www.facebook.com/AnastasiiaGanushkevych/"><img src={facebook}/></a>
      <a href="https://www.linkedin.com/in/anastasiia-ganushkevych-523695182"><img src={linkedin}/></a>
      <a href="mailto:ganushkevycha@gmail.com"><img src={gmail}/></a>
      <a href="https://www.instagram.com/nastkazgdanska/"><img src={instagram}/></a>
      <a href="tel:512-371-168"><img src={telephone}/></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span></span> Gdansk, Poland</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <a href="tel:512-371-168"><p> (+48) 512 371 168</p></a>
    </div>
    <div>
      <p><a href="mailto:ganushkevycha@gmail.com"> ganushkevycha@gmail.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> <span>@</span>nastkazgdanska</h2>
    <p class="menu">
      <a href="#">Home</a> |  
      <a href="#CardPortrait">Gallery</a> | 
    </p>
    <p class="name"> @nastkazgdanska &copy; {new Date().getFullYear()}</p>
  </div>
</footer>
    )
}
export default Footer