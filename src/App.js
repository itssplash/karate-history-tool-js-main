import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import MainPage from './Comp/MainPage';
import LoginPage from './Comp/LoginPage';

/*Added routing to facilitate the process of going from one page to another*/
function App(){
    return(
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path = "/" element={<MainPage /> } />
                    <Route path = "/login" element={<LoginPage /> } />

                </Routes>
                <div className="content-container">

                </div>

            </div>
        </Router>
    );
}

export default App;