import React from 'react';
import '../../css/Header.css';
import BurgerMenuHome from '../BurgerMenuHome/BurgerMenuHome';
import background from "../../img/main-bg.jpg";

const Header = () => {

    return (
        <div>

            <header
            style={
                {backgroundImage: `url(${background})`,
                backgroundSize: `cover`,
                backgroundRepeat: `no-repeat`
            }}
            >

            <BurgerMenuHome />
                <div className="sitetitle">
                    <h2>The Housing Estate Library "Reader"</h2>
                </div>
            </header>
        </div>
    );
}

export default Header;