import React, { useState, useEffect } from "react";
import BurgerMenuHome from '../../components/BurgerMenuHome/BurgerMenuHome';

const ItSpecialists = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itSpecialists, setItSpecialists] = useState([]);


    const getItSpecialists = async () => {
        const data = await fetch("https://reqres.in/api/users/")
        .then(res => res.json())
        .then(
            result => {
                setIsLoaded(true);
                setItSpecialists(result.data);
            },
            error => {
                setIsLoaded(true);
                setError(error);
            }
        );
    };

    useEffect(() => {
        getItSpecialists();
    }, []);
    

    // return (
    //     <div>
    //         <BurgerMenuHome />
    //         <h3>Data from API - func comp - using hooks, async</h3> 
    //     </div>
    // )

    if(error) {
        return<div><BurgerMenuHome />Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div><BurgerMenuHome />Loading...</div>;
    } else {
        return itSpecialists.map(itSpecialist => (
               <div key={itSpecialist.id}>
                    <p><strong>{itSpecialist.first_name}</strong></p>
                    <p>{itSpecialist.email}</p>
                    <img key={itSpecialist.avatar} src={itSpecialist.avatar} />
               </div> 
               ));
    }
}


export default ItSpecialists;