import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMealById } from "../../../Service";
import "./MealById.css"
import { addMeal } from "../../../Service";


const MealById = ({loggedIn}) => {
    const { mealId } = useParams()
    const [meal, setMeal] = useState({})

    useEffect(() => {
        getMealById(mealId).then(res => {
            setMeal(res.data.meals[0])
        })
    }, [mealId])

    const addMealToFavourites = () => {
        if (loggedIn == null) {
            alert("Please login first or register, if you don't have account!")
        } 
        else {
            loggedIn.favouriteMeals.push(meal)
            addMeal(loggedIn.id, loggedIn).then(res => {
                console.log(res.data)
            })
        }
    }

    return (

        <div className="all__recipe">
            <h1 className="h1style">{meal.strMeal}</h1>

            <div className="wrapper">

                <div className="recipe__presentation">
                    <img className="img" src={meal.strMealThumb} alt="mealImage" />
                </div>


                <div className="ingredients">
                    <p className="additional"> <img src="/globus.png" alt="globus" className="globus"/>  {meal.strArea} food</p>
                    <p className="additional"><img src="/food.png" alt="food" className="globus"/>  {meal.strTags}</p>
                    <br></br>
                    <br />
                    <h2 className="h2s" >Ingredients</h2>

                    <ul>
                        <li>{meal.strMeasure1} {meal.strIngredient1}</li>
                        <li>{meal.strMeasure2} {meal.strIngredient2}</li>
                        <li>{meal.strMeasure3} {meal.strIngredient3}</li>
                        <li>{meal.strMeasure4} {meal.strIngredient4}</li>
                        <li>{meal.strMeasure5} {meal.strIngredient5}</li>
                        <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                        <li>{meal.strMeasure7} {meal.strIngredient7}</li>
                        <li>{meal.strMeasure8} {meal.strIngredient8}</li>
                        <li>{meal.strMeasure9} {meal.strIngredient9}</li>
                        <li>{meal.strMeasure10} {meal.strIngredient10}</li>
                    </ul>
                    <br />

                  
                  
                  {meal.strYoutube===""? null : <p> <a href={meal.strYoutube} target="_blank" rel="noreferrer"><img className="youtube" src="/youtube.png" alt="logo"/></a> </p>}
                 
                  <button onClick={()=> {
                    addMealToFavourites()
                }}> <img className="like" src="/favourite.png" alt="love"/> </button>

                </div>
            </div>
            <div className="method" >
                <h2 className="h2style">Method</h2>
                <hr />
                <p className="pstyle">{meal.strInstructions}</p>
            </div>


        </div>

    );
}

export default MealById;

