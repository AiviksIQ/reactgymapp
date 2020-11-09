import React from 'react';
import './Contacts.css';
import Form from './Form';
import SimpleMap from './Maps';
import Fade from 'react-reveal/Fade';
import Home from '../home.svg';
import Phone from '../phone-call.svg';
import Email from '../email.svg';
import LazyLoad from 'react-lazyload';

function Contacts() {
    return (
        <div id="contacts">
            <LazyLoad once >
                <section className="section-book" >
                    <Fade>
                        <div className="row contact--height-90">
                            <div className="book">
                                <div className="u-center-text u-margin-bottom-big">
                                    <h2 className="heading-secondary contacts__heading">
                                        Contacts
                                </h2>
                                </div>
                                <div className="book__form">
                                    <section className="section-stories">
                                        <Form />
                                    </section>
                                </div>
                                <div className="book__contacts">
                                    <div className="book__contacts-wrapper">
                                        <div className="book__contacts--email">
                                            <a className="book__contacts--item" href={`mailto:aivis.palacis@gmail.com`}> <img src={Email} className='book__contacts--home'></img>aivis.palacis@gmail.com</a>
                                        </div>
                                        <div className="book__contacts--phone">
                                            <a className="book__contacts--item" href={`tel:+64 27 318 0832‬`}>                           <img src={Phone} className='book__contacts--phone'  ></img>+64 27 318 0832‬</a>
                                        </div>
                                        <div className="book__contacts--address">
                                            <p className="book__contacts--item"><img src={Home} className='book__contacts--address'  ></img>Queenstown 9300</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </section>
                <SimpleMap />
            </LazyLoad>
        </div>
    )
}

export default Contacts
