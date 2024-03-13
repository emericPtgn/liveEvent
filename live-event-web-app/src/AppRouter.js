// AppRouter.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './app/home/page.js'
import TicketPage from './app/billeterie/page.js'
import ProgrammationPage from './app/programmation/page.js'
import AboutPage from './app/about/page.js';
import ContactPage from './app/contact/page.js';
import MapPage from './app/map/page.js';
import VenirAuFestival from "./app/infos/page.js";
import DeviensBenevole from "./app/benevole/page.js";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/programmation' element={<ProgrammationPage />} />
            <Route path='/billeterie' element={<TicketPage />} />
            <Route path='/map' element={<MapPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/venir-au-festival' element={<VenirAuFestival />} />
            <Route path='/deviens-benevole' element={<DeviensBenevole />} />
        </Routes>
    );
}

export default AppRouter;
