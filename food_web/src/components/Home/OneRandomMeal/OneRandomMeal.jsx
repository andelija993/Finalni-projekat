import { useHistory } from "react-router";
import "./OneRandomMeal.css"
const OneRandomMeal = ({ meal }) => {


    const history = useHistory()

    return (
        <div className="randomwrap" onClick={() => {
            history.push(`/mealById/${meal.idMeal}`)
        }}>
            
            <div className="randomdiv">
                <img className="randomimg" src={meal.strMealThumb} alt="mealImage" />
                <p className="randomp">{meal.strMeal}</p>
            </div>
        </div>
    );
}

export default OneRandomMeal;