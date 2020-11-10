import Fade from 'react-reveal/Fade';
import React, { useState } from "react";
import './Programs.css';
import Modal from 'react-modal';
import './Modal.css';
import Video from '../video.mp4';
import LazyLoad from 'react-lazyload';
Modal.setAppElement('#root')

function Programs() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div id="programs">
            <LazyLoad once >
                <section className="section-tours">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Programs
                    </h2>
                    </div>
                    <Fade>
                        <div className="row row__programs">
                            <div className="col-1-of-3 margin-bottom--0">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--1">
                                            &nbsp;
                                </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--1">Huge Forearm Workout</span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>3 day split</li>
                                                <li>Up to 30 day plan</li>
                                                <li>Result driven</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-1">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">$0</p>
                                            </div>
                                            <a href="#popup" className="btn btn--white" onClick={() => setModalIsOpen(true)}>View More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3 margin-bottom--0">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--2">
                                            &nbsp;
                                </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--2">Toproll Workout</span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>3 day split</li>
                                                <li>Up to 30 day plan</li>
                                                <li>Result driven</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-2">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">$0</p>
                                            </div>
                                            <a href="#popup" className="btn btn--white" onClick={() => setModalIsOpen(true)}>View More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-of-3 margin-bottom--0">
                                <div className="card">
                                    <div className="card__side card__side--front">
                                        <div className="card__picture card__picture--3">
                                            &nbsp;
                                </div>
                                        <h4 className="card__heading">
                                            <span className="card__heading-span card__heading-span--3"> One Day Forearm Workout
                                        </span>
                                        </h4>
                                        <div className="card__details">
                                            <ul>
                                                <li>3 day split</li>
                                                <li>Up to 30 day plan</li>
                                                <li>Result driven</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card__side card__side--back card__side--back-3">
                                        <div className="card__cta">
                                            <div className="card__price-box">
                                                <p className="card__price-only">Only</p>
                                                <p className="card__price-value">$0</p>
                                            </div>
                                            <a href="#popup" className="btn btn--white" onClick={() => setModalIsOpen(true)}>View More</a>
                                            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                                                style={{
                                                    overlay: {
                                                        position: 'fixed',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        backgroundColor: 'rgba(255, 255, 255, 0)',
                                                        zIndex: '2'
                                                    },
                                                    content: {
                                                        position: 'absolute',
                                                        top: '50%',
                                                        left: '50%',
                                                        border: '1px solid #ccc',
                                                        background: '#fff',
                                                        overflow: 'auto',
                                                        WebkitOverflowScrolling: 'touch',
                                                        borderRadius: '4px',
                                                        outline: 'none',
                                                        padding: '20px',
                                                        width: '80%',
                                                        height: '80%',
                                                        transform: 'translate(-50%, -50%)',
                                                        backgroundImage: 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.88))',
                                                        zIndex: '2'
                                                    }
                                                }}
                                            >
                                                <div className="popup__right">
                                                    <a onClick={() => setModalIsOpen(false)} className="popup__close">×</a>
                                                    <h2 className="heading-secondary u-margin-bottom-small">One Day Forarm Workout</h2>
                                                    <p className="popup__text">
                                                        This is one-day workout for your forearms. Don`t do this more than once every 5 days.Do some stretching after thisand remember control over everything. Do pauses at the end of movements make your hands work!                    </p>
                                                    <h3 className="heading-tertiary u-margin-bottom-small flex--center">
                                                    </h3>
                                                    <div className="member-img">
                                                        <video src={Video} mute='true' autoPlay={true} />
                                                    </div>
                                                </div>
                                                <a href="workouts/One_day_forearm_workout.pdf" className="btn btn--green modal__button--center">Download now</a>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>
            </LazyLoad>
        </div>
    )
}

export default Programs
