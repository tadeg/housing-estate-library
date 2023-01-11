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
    

    let dispContent = null;

    if(error) {
        dispContent = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        dispContent = <div>Loading...</div>;
    } else {
        dispContent = itSpecialists.map(itSpecialist => (
               <div key={itSpecialist.id}>
                    <p><strong>{itSpecialist.first_name}</strong></p>
                    <p>{itSpecialist.email}</p>
                    <img key={itSpecialist.avatar} src={itSpecialist.avatar} />
               </div> 
               ));
    }

    return (
        <div>
            <BurgerMenuHome />
            <br /><br /><br />
            <h3>Data from API - using hooks, async</h3>  
            {dispContent}
        </div>
    )

}


export default ItSpecialists;