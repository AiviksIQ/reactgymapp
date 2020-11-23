import React from 'react'
import './Membership.css';
// import Button from './Button';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

function Membership() {
    return (
        <div id="membership">
            
                <section className="section-features">
            
                    <h3 data-cy="heading-member"  className="heading-membership">Memberships</h3>
                    <Fade>
                        <div className="row">
                            <div className="col-1-of-4 row__child">
                                <div data-cy="feature-box" className="feature-box">
                                <LazyLoad once >
                                    <div data-cy="member-image" className="member-img member__cover">
                                        <h3 data-cy="heading-member--sub"  className="heading-tertiary u-margin-bottom-small">Day Pass</h3>
                                    </div>
                                    </LazyLoad>
                                    <i className="feature-box__icon icon-basic-world"></i>
                                    <p data-cy="feature-text" className="feature-box__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="card__details card__details--small">
                                        <ul data-cy="features-list">
                                            <li>3 day split</li>
                                            <li>Up to 30 day plan</li>
                                            <li>Result driven</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-4 row__child">
                                <div data-cy="feature-box" className="feature-box">
                                <LazyLoad once >
                                    <div data-cy="member-image" className="member-img member__cover">
                                        <h3 data-cy="heading-member--sub"  className="heading-tertiary u-margin-bottom-small">Monthly Subscription</h3>
                                    </div>
                                    </LazyLoad>
                                    <i className="feature-box__icon icon-basic-compass"></i>
                                    <p data-cy="feature-text" className="feature-box__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="card__details card__details--small">
                                    <ul data-cy="features-list">
                                            <li>3 day split</li>
                                            <li>Up to 30 day plan</li>
                                            <li>Result driven</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-4 row__child">
                                <div data-cy="feature-box" className="feature-box">
                                <LazyLoad once >
                                    <div data-cy="member-image"  className="member-img member__cover">
                                        <h3 data-cy="heading-member--sub" className="heading-tertiary u-margin-bottom-small">All in Membership</h3>
                                    </div>
                                    </LazyLoad>
                                    <i className="feature-box__icon icon-basic-map"></i>
                                    <p data-cy="feature-text" className="feature-box__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <div className="card__details card__details--small">
                                    <ul data-cy="features-list">
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
            
        </div>
    )
}

export default Membership
