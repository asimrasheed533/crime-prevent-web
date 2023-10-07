import React from 'react'
import './Footer.scss'

import Logo from '../../assets/logo.png'
import FbIcon from "../../assets/FbIcon.svg"
import TwIcon from "../../assets/TwitterIcon.svg"
import LnIcon from "../../assets/LinkInIcon.svg"


function Footer() {
  return (
    <div className="footer__container">

        <div className="footer__container__content">
                <div className="footer__container__content__logo">
                   <img src={Logo} alt="Footer Logo" />
                   {/* <p> UNILAW</p> */}
                </div>
                <div className="footer__container__content__links">
                  <a href="#" className="footer__container__content__link">
                    <img src={FbIcon} alt="" />
                  </a>
                  <a href="#" className="footer__container__content__link">
                    <img src={TwIcon} alt="" />
                  </a>
                  <a href="#" className="footer__container__content__link">
                    <img src={LnIcon} alt="" />
                  </a>

                </div>
        </div>
    </div>
  )
}

export default Footer