import React from 'react'
import { BrowserRouter, Routes as Routez, Route } from 'react-router-dom';
import Landing from './components/pages/Landing';
import Navbar from './components/pages/Navbar';
import Items from './components/pages/Items';
import CreaciónDoctores from './components/pages/CreaciónDoctores';

const Routes = () => {
    return (

        <BrowserRouter>
            <Navbar />
            <Routez>
                <Route path='/pag-3' element={<CreaciónDoctores />} />
                <Route path='/pag-2' element={<Items />} />
                <Route path='/' element={<Landing />} />
            </Routez>
        </BrowserRouter>
    )
}

export default Routes