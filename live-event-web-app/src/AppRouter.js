// AppRouter.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './app/home/page.js'
import TicketPage from './app/billeterie/page.js'
import ProgrammationPage from './app/programmation/page.js'
import AboutPage from './app/about/page.js';
import ContactPage from './app/contact/page.js';
import MapPage from './app/map/page.js';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/billeterie' element={<TicketPage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/programmation' element={<ProgrammationPage />} />
                <Route path='/map' element={<MapPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
