import React from 'react'
import './Hero.css';
import Arrow from '../adown.svg';
import Fade from 'react-reveal/Fade';
import './BounceArrow.css';
import { Link } from "react-scroll";

function Hero() {
    return (
        <div className="header-wrapper" id="home">
            <header rel="preload" className="hero hero__image">
                <div className="hero__text-box">
                    <h1 className="heading-primary">
                        <Fade left cascade>
                            <span data-cy="heading-main" className="heading-primary--main">React Gym</span>
                        </Fade>
                        <Fade right cascade>
                            <span className="heading-primary--sub">Become the best versions of yourself</span>
                        </Fade>
                    </h1>
                </div>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={window.innerWidth < 650 ? 0 : -95}
                    duration={500}
                >
                    <img src={Arrow}  data-cy="arrow" className="bounce" ></img>
                </Link>
            </header>
        </div >
    )
}

export default Hero
