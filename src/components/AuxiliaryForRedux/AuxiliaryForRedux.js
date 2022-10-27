import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import store from "../../store/store";
import AddWorker from "../../pages/workers/addWorker.js";
import ListWorkers from "../../pages/workers/listWorkers.js";

import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';


const AuxiliaryForRedux = () => {
    
    return (

        <div>

           
            <BurgerMenuHome />
            <h3>Data to/from Redux store</h3>  

            <Provider store={store}>
                <AddWorker />
                <ListWorkers />
            </Provider>

        </div>
    )
}

export default AuxiliaryForRedux;
