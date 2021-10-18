import OneMeal from "./OneMeal"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMealsByCategory } from "../../Service";

const MealsByCategory = () => {
    const {category} = useParams()
    const[meals, setMeals] = useState([])

    useEffect(() => {
        let mounted = true

        getMealsByCategory(category).then(res => {
            if (mounted)
                setMeals(res.data.meals)
        })
        return () => {mounted = false}
    })
            
    return (
        <>
            {meals.map(meal => <OneMeal key={meal.idMeal} meal={meal}/>)}
        </>
    );
}

export default MealsByCategory;