import React from 'react'
import { BrowserRouter, Routes as Routez, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Navbar from './components/pages/Navbar';

const Routes = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routez>
                <Route path='/' element={<Landing />} />
            </Routez>
        </BrowserRouter>
    )
}

export default Routes