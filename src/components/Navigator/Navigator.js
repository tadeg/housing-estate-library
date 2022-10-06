import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage/Homepage';
import NewBook from '../../pages/newbook/NewBook';
import NewReader from '../../pages/newreader/NewReader';
import Readers from '../../pages/readers/Readers';



const Navigator = () => {

    return (

    <div>
     <Router>
        <Routes>
        <Route path='/housing-estate-library' element={<Homepage />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/newbook' element={<NewBook />} />
          <Route path='/newreader' element={<NewReader />} />
          <Route path='/readers' element={<Readers />} />
          
        </Routes>
    </Router>
    </div>
    )

}

export default Navigator;