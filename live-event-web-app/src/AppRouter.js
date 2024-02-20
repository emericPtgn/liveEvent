// AppRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './app/home/page.js'
import TicketPage from './app/billeterie/page.js'
import ProgrammationPage from './app/programmation/page.js'
import AboutPage from './app/about/page.js';
import ContactPage from './app/contact/page.js';
import MapPage from './app/map/page.js';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/programmation' element={<ProgrammationPage />} />
            <Route path='/billeterie' element={<TicketPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    );
}

export default AppRouter;
