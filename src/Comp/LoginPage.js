//import React from 'react';
import React, { useState } from 'react'
import './LoginPage.css';
import './Style.css';

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    const renderForm = () => {
        if (isLogin) {
            return (

                <>
                    {/* login form -  input box (email and password), buttons, forgot password*/}
                    <div className='login-form'>
                        <input type='email' placeholder='Email' required/>
                        <input type='password' placeholder='Password' />
                        <div className='button-container'>
                            <button className={`outline-button ${isLogin ? "active" : ""}`}
                                    onClick={() => setIsLogin(true)}
                            >
                                Login
                            </button>
                            <button className={`red-button ${!isLogin ? "active" : ""}`}
                                    onClick={() => setIsLogin(false)}
                            >
                                Register
                            </button>
                        </div>
                        <a href="/www.google.com    " className='forgot-password'>Forgot Password?</a>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    {/* register form -  input box (username,email,password, etc), register button*/}
                    <div className='login-form'>
                        <input type='text' placeholder='Username' required/>
                        <input type='text' placeholder='First Name' required/>
                        <input type='text' placeholder='Last Name' required/>
                        <input type='email' placeholder='Email' required/>
                        <input type='password' placeholder='Password' required/>
                        <input type='text' placeholder='Organization' required/>
                        <div className='button-container'>
                            <button className='red-button'>Register</button>
                        </div>
                    </div>
                </>
            );
        }
    };

    const handleNavigation = (url) => {
        console.log(`Navigating to: ${url}`);
        window.location.assign(url);
    };
    return (

            <div className='page-container'>

                {/* Header section */}
                <div className='header'>
                    <div className='header-left'>
                        <h1>Shuyokan Dojo</h1>
                    </div>
                    <div className='header-right'>
                        <h1>(613) 286-0476</h1>
                    </div>
                </div>

                {/* Navigation section */}
                <nav className='navigation-bar'>
                    <ul>
                        <li onClick={() => handleNavigation("https://shuyokandojo.com/")}>HOME</li>
                        {/* Redirects user when interacting with navigation*/}
                        <li onClick={() => handleNavigation("https://shuyokandojo.com/about-us")}>ABOUT US</li>
                        <li onClick={() => handleNavigation("https://shuyokandojo.com/mission-statement")}>MISSION
                            STATEMENT
                        </li>
                        <li onClick={() => handleNavigation("https://shuyokandojo.com/history")}>HISTORY</li>
                        <li onClick={() => handleNavigation("https://shuyokandojo.com/sensei-darren-hunter")}>SENSEI</li>
                        <li onClick={() => handleNavigation("https://shuyokandojo.com/schedule")}>SCHEDULE</li>
                        <li className="more-dropdown">
                            MORE
                            <ul className="more-dropdown-content">
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/programs")}>Programs</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/events")}>Events</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/karatedo")}>Karatedo</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/judo")}>Judo</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/jiu-jitsu")}>Jiu Jitsu</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/gallery")}>Gallery</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/video")}>Video</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/shop")}>Shop</li>
                                <li onClick={() => handleNavigation("https://shuyokandojo.com/contact-us")}>Contact Us
                                </li>


                            </ul>
                        </li>
                        <li>
                            <i className="fas fa-user-alt"></i> {/* displays user icon */}
                        </li>
                    </ul>
                </nav>
                {/* Main area section */}
                <div className='main-area'>
                    <h1>{isLogin ? "Login" : "Register"}</h1>

                    <div className='form-container'>

                        <div className='button-container'>
                            <button className={`outline-button ${isLogin ? "active" : ""}`}
                                    onClick={() => setIsLogin(true)}
                            >
                                Return
                            </button>

                        </div>
                        {renderForm()}
                    </div>
                </div>
                {/* Footer area*/}
                <div className='footer'>
                    <p>Copyright © 2024 Shuyokan Dojo, Inc - All Rights Reserved</p>
                    <div className='icons'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i> {/* display facebook icon*/}
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i> {/* display youtube icon*/}
                        </a>
                    </div>

                    {/*  <div className='message-icon'>
                        <i className='fas fa-comment-alt'></i> {/* display message icon*
                    </div>*/}
                </div>


            </div>
            );
            }
