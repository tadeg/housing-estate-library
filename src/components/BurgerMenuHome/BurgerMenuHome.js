import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../css/BurgerMenuHome.css";


class BurgerMenuHome extends Component {

constructor(props) {
    super(props);

    this.state = {
        burgerStyles: ['burger'].join(' '),
        icoBurgerStyles: ['fas', 'fa-bars', 'show'].join(' '),
        icoXStyles: ['fas', 'fa-times'].join(' '),
        menuStyles: ['formenu'].join(' ')
    };
}
 
    openMenuHandler = () => {
        let icoBurgerStylesHn = ['fas', 'fa-bars'].join(' ');
        let icoXStylesHn = ['fas', 'fa-times', 'show'].join(' ');
        let menuStylesHn = ['formenu', 'show'].join(' ');

        this.setState ({
            icoBurgerStyles: icoBurgerStylesHn,  
            icoXStyles: icoXStylesHn,
            menuStyles: menuStylesHn
        })
    }

    closeMenuHandler = () => {
        console.log("Yeah!!!! (3)");
        let icoBurgerStylesHn = ['fas', 'fa-bars', 'show'].join(' ');
        let icoXStylesHn = ['fas', 'fa-times'].join(' ');
        let menuStylesHn = ['formenu'].join(' ');

        this.setState ({
            icoBurgerStyles: icoBurgerStylesHn,  
            icoXStyles: icoXStylesHn,
            menuStyles: menuStylesHn
        })

        console.log("Yeah!!!! (4)");
    }



    render () {

    return (

    <div>
        <div className={this.state.burgerStyles}>
            <i className={this.state.icoBurgerStyles} onClick={this.openMenuHandler} ></i>  
            <i className={this.state.icoXStyles} onClick={this.closeMenuHandler} ></i>  
        </div>
      

        <aside className={this.state.menuStyles}>
            <ul>
                <li className="menuitem"><Link to='/'>Homepage</Link></li>
                <li className="menuitem"><Link to='/newbook'>Admin panel - Add new book</Link></li>
                <li className="menuitem"><Link to='/newreader'>Admin panel - Add new reader - using Formik, Yup</Link></li>
                <li className="menuitem"><Link to='/readers'>Admin panel - Display readers - get from API</Link></li>
                <li className="menuitem"><Link to='/workers'>Admin panel - Add/delete/display workers - using Redux</Link></li>
                <li className="menuitem"><Link to='/followers'>Admin panel - Display followers - get from API to Redux store - using Redux-thunk</Link></li>

            </ul>
        </aside>

    </div>

        )
    }
}


export default BurgerMenuHome;