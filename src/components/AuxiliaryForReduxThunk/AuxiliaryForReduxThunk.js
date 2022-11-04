import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";
import store from "../../store/store";
import ListFollowers from "../../pages/followers/listFollowers.js";
import BurgerMenuHome from '../BurgerMenuHome/BurgerMenuHome';


const AuxiliaryForReduxThunk = () => {

    return (

        <div>

            <BurgerMenuHome />
            <h3>Data from API to Redux store - using Redux-thunk</h3>  

            <Provider store={store}>
                <ListFollowers />
            </Provider>

        </div>
    )

}

export default AuxiliaryForReduxThunk;