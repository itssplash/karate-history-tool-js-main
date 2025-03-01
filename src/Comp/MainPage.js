/* have the Main page here */

import React from 'react';
// import NavigationBar from './NavigationBar.js';
import './Style.css';
import './MainPage.css';


function MainPage(){

    const handleNavigation = (url) => {
        console.log(`Navigating to: ${url}`);

        window.location.assign(url);
    };
    return (
        <div id="root">
            {/* Header */}
            <header className='header'>
                <div className='header-left'>
                    <h1>Shuyokan Dojo</h1>
                </div>
                <div className='header-right'>
                    <h1>(613) 286-0476</h1>
                </div>
            </header>

            {/* Navigation - item list */}
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

            {/* Main menu - Family tree, Stories and Upload section*/}
            <div className="menu">
                <ul>
                    <li><strong>Quick Actions</strong>
                        <ul>
                            <li>
                                <i className="fas fa-home"></i>
                                &nbsp;&nbsp;Family tree
                            </li>
                            <li>
                                <i className="fas fa-book"></i>
                                &nbsp;&nbsp;Stories
                            </li>
                            <li>
                                <i className="fas fa-upload"></i>
                                &nbsp;&nbsp;Upload Information
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
            {/* Main Content */}
            <div className='main-area'>
                <h1>Shorinjiryu Karatedo Family Tree</h1>
            </div>

            {/* Footer area*/}
            <footer className='footer'>
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
                <i class='fas fa-comment-alt'></i> /* display message icon*
            </div> */}
            </footer>
        </div>
    );
}

export default MainPage;