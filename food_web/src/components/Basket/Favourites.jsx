import { useState } from "react";
import { useHistory } from "react-router-dom";
import OneFavouriteMeal from "./OneFavouriteMeal";
import "./Favourites.css"

const Favourites = ({ loggedIn, setLoggedIn }) => {
    const [meals, setMeals] = useState(loggedIn.favouriteMeals)

    const history = useHistory()
    
    return (
        <div>
            <p className="baskethi"> Hello {loggedIn.username} </p>
            <button onClick={()=> {
                setLoggedIn(null)
                history.push('/')
            }} className="logoutbtn"> Logout </button>   

            {loggedIn.favouriteMeals.length === 0 ?
                <p className="basketp"> You still don't have favourites meals. Go on and start exploring!</p> : 
                <div>
                    {meals.map(meal => <OneFavouriteMeal key={meal.idMeal} meal={meal} loggedIn={loggedIn} setMeals={setMeals}/>)}
                </div>
            }
        
        </div>
    );
}

export default Favourites;
