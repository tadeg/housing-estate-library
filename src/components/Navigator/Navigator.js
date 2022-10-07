import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage/Homepage';
import NewBook from '../../pages/newbook/NewBook';
import NewReaderFormik from '../../pages/newreaderformik/NewReaderFormik';
import Readers from '../../pages/readers/Readers';



const Navigator = () => {

    return (

    <div>
     <Router>
        <Routes>
        <Route path='/housing-estate-library' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/newbook' element={<NewBook />} />
          <Route path='/newreader' element={<NewReaderFormik />} />
          <Route path='/readers' element={<Readers />} />
          
        </Routes>
    </Router>
    </div>
    )

}

export default Navigator;