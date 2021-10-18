import { useHistory } from "react-router";
import "./OneMeal.css"

const OneMeal = ({ meal }) => {

    const history = useHistory()

    return (
        <div className="onecontainer" onClick={() => {
            history.push(`/mealById/${meal.idMeal}`)
        }}>
            <div className="onerecipe">
                <img className="oneimg" src={meal.strMealThumb} alt="mealImage" />
                <p className="onep">{meal.strMeal}</p>
            </div>
        </div>
    );
}

export default OneMeal;