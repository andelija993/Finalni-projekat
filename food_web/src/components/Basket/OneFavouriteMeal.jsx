import { useHistory } from "react-router";
import { removeMeal } from "../../Service";
import "./OneFavouriteMeal.css"

const OneFavouriteMeal = ({ meal, loggedIn, setMeals }) => {

    const history = useHistory()

    return (
        <div className="favwrap">
            <div className="favouritediv">
                <img className="imgfav" src={meal.strMealThumb} alt="mealImage" onClick={() => {
                    history.push(`/mealById/${meal.idMeal}`)
                }}/>
                <p className="favouritep">{meal.strMeal}</p>
                <button onClick={() => {
                    loggedIn.favouriteMeals = loggedIn.favouriteMeals.filter(item => item.strMeal !== meal.strMeal)
                    setMeals(loggedIn.favouriteMeals)
                    removeMeal(loggedIn.id, loggedIn).then(res => {
                        console.log(res.data)
                    })
                }} className="favouritebtn"> Remove </button>
            </div>
        </div>
    );
}

export default OneFavouriteMeal;