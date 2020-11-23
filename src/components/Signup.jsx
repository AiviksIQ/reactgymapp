import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link as Linked } from 'react-router-dom';
import './Signup.css';
import logo from '../logo.svg';

function SignUp() {

    const [signInTo, setSignIn] = useState(false);
    const signUp = () => {
        setSignIn(!signInTo)
    }

    return (
        <div className="form__wrapper">
            <div data-cy="right-panel" className={signInTo ? "right-panel-active container" : "container"} id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social" data-cy="signup-facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social" data-cy="signup-google"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social" data-cy="signup-linkedin"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input data-cy='name-signup' type="text" placeholder="Name" />
                        <input data-cy="email-signup" type="email" placeholder="Email" />
                        <input data-cy="password-signup" type="password" placeholder="Password" />
                        <button data-cy="signup_button">Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social" data-cy="signin-facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social" data-cy="signin-google"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social" data-cy="signin-linkedin"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input data-cy="signin__email" type="email" placeholder="Email" />
                        <input data-cy="signin__password"  type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button data-cy="signin_button">Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button onClick={signUp} className="ghost" id="signIn" data-cy="signin_button--change">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1 data-cy="hello-friend">Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={signUp} className="ghost" data-cy="signup_button--change">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
            <Linked to='/reactgymapp' data-cy="logo-link" ><img src={logo} alt="logo" className="header__logo" /></Linked>
        </div>
    )
}

export default SignUp
