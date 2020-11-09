import React from 'react'
import './About.css';
import Fade from 'react-reveal/Fade';
import Slider from './Slider';
import SimpleReactLightbox from "simple-react-lightbox";
import LazyLoad from 'react-lazyload';


function About() {
    return (
        <div>
            <section className="section-about" id="about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        About React Gym
                    </h2>
                </div>
                <Fade>
                    <div className="row">
                        <div className="col-1-of-2 about__text-wrapper">
                            <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with our work</h3>
                            <p className="paragraph">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                        </p>
                        </div>
                        <div className="col-1-of-2 column--center">
                            <div className="composition">
                                <LazyLoad once>
                                    <SimpleReactLightbox>
                                        <Slider />
                                    </SimpleReactLightbox>
                                </LazyLoad>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    )
}

export default About
