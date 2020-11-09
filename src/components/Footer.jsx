import React from 'react'
import './Footer.css';
import logo from '../logo.svg';
import { Link } from "react-scroll";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__logo-box">
                <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={window.innerWidth < 600 ? 0 : -95}
                            duration={500}
                        ><img src={logo} alt="logo" className="footer__logo" /></Link>
              
                </div>
                <div className="row footer-relative">
                    <div className="col-1-of-2 margin--0">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="#" className="footer__link">Home</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                                <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2 footer--center">
                        <p className="footer__copyright">
                            Copyright ©2020 All rights reserved | This template is made with <a className="footer__link" href="https://reactjs.org/" target="_blank">React.js </a> by <a href="https://www.linkedin.com/in/aivis-palacis-72bb5085/" target="_blank" className="footer__link">Aivis Palacis</a>.
                       </p>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
