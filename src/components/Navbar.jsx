import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import { Link as Linked } from 'react-router-dom';
import logo from '../logo.svg';
import './Navbar.css';

function Navbar() {
    const [isActive, setActive] = useState(true);
    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const changeBackground = () => {
            if (window.scrollY >= 1) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        };
    }, [navbar]);

    const handleToggle = () => {
        if (window.innerWidth < 600) {
            setActive(!isActive);
        }
        document.querySelectorAll("li").forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.4}s`;
            }
        });
    };

    return (
        <div className="navigation__wrapper">
            <div className={navbar ? "navigation active-black" : "navigation"}>
                <nav className={isActive ? "navigation__nav" : "navigation__nav active"}>
                    <div className="header__logo-box">
                        <Link
                            onClick={handleToggle}
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={window.innerWidth < 600 ? 0 : -95}
                            duration={500}
                        ><img src={logo} alt="logo" className="header__logo" /></Link>
                    </div>
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link
                                onClick={handleToggle}
                                className="navigation__link"
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={window.innerWidth < 600 ? 0 : -95}
                                duration={500}
                            >About</Link>
                        </li>
                        <li className="navigation__item">
                            <Link
                                onClick={handleToggle}
                                className="navigation__link"
                                activeClass="active"
                                to="membership"
                                spy={true}
                                smooth={true}
                                offset={window.innerWidth < 600 ? 0 : -95}
                                duration={500}
                            >Membership</Link>
                        </li>
                        <li className="navigation__item">
                            <Link
                                onClick={handleToggle}
                                className="navigation__link"
                                activeClass="active"
                                to="programs"
                                spy={true}
                                smooth={true}
                                offset={window.innerWidth < 600 ? 0 : -95}
                                duration={500}
                            >Programs</Link>
                        </li>
                        <li className="navigation__item">
                            <Link
                                onClick={handleToggle}
                                className="navigation__link"
                                activeClass="active"
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={window.innerWidth < 600 ? 0 : -95}
                                duration={500}
                            >Contacts</Link>
                        </li>
                        <li className="navigation__item">
                        <Linked to='/Signup'><a href="#section-workouts none" className="btn cta--mobile">Sign Up</a></Linked>
                        </li>
                    </ul>
                    <Linked to='/Signup'><a className="btn cta--desktop">Sign up</a></Linked>
                </nav>
            </div>
            <div onClick={handleToggle} className="burger burger-js">
                <div className={isActive ? "buns line1" : "buns line1 toggle"}></div>
                <div className={isActive ? "buns line2" : "buns line2 toggle"}></div>
                <div className={isActive ? "buns line3" : "buns line3 toggle"}></div>
            </div>
        </div>
    )
}

export default Navbar
