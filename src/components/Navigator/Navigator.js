import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../../pages/homepage/Homepage';
import NewBook from '../../pages/newbook/NewBook';
import NewReaderFormik from '../../pages/newreaderformik/NewReaderFormik';
import Readers from '../../pages/readers/Readers';
import ItSpecialists from '../../pages/itspecialists/ItSpecialists';
import AuxiliaryForRedux from "../AuxiliaryForRedux/AuxiliaryForRedux";
import AuxiliaryForReduxThunk from "../AuxiliaryForReduxThunk/AuxiliaryForReduxThunk";



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
          <Route path='/itspecialists' element={<ItSpecialists />} />
          <Route path='/workers' element={<AuxiliaryForRedux />} />
          <Route path='/followers' element={<AuxiliaryForReduxThunk />} />
          
        </Routes>
    </Router>
    </div>
    )

}

export default Navigator;