import React from 'react'
import './Membership.css';
// import Button from './Button';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

function Membership() {
    return (
        <div>
            <LazyLoad once >
                <section className="section-features" id="membership">
                    <h3 className="heading-membership">Memberships</h3>
                    <Fade>
                        <div className="row">
                            <div className="col-1-of-4 row__child">
                                <div className="feature-box">
                                    <div className="member-img member__cover">
                                        <h3 className="heading-tertiary u-margin-bottom-small">Day Pass</h3>
                                    </div>
                                    <i className="feature-box__icon icon-basic-world"></i>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="card__details card__details--small">
                                        <ul>
                                            <li>3 day split</li>
                                            <li>Up to 30 day plan</li>
                                            <li>Result driven</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-4 row__child">
                                <div className="feature-box">
                                    <div className="member-img member__cover">
                                        <h3 className="heading-tertiary u-margin-bottom-small">Monthly Subscription</h3>
                                    </div>
                                    <i className="feature-box__icon icon-basic-compass"></i>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="card__details card__details--small">
                                        <ul>
                                            <li>3 day split</li>
                                            <li>Up to 30 day plan</li>
                                            <li>Result driven</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-4 row__child">
                                <div className="feature-box">
                                    <div className="member-img member__cover">
                                        <h3 className="heading-tertiary u-margin-bottom-small">All in Membership</h3>
                                    </div>
                                    <i className="feature-box__icon icon-basic-map"></i>
                                    <p className="feature-box__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="card__details card__details--small">
                                        <ul>
                                            <li>3 day split</li>
                                            <li>Up to 30 day plan</li>
                                            <li>Result driven</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    {/* <Button /> */}
                </section>
            </LazyLoad>
        </div>
    )
}

export default Membership