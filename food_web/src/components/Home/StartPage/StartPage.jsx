import Onecategory from "../Onecategory"
import { getAllCategories } from "../../../Service";
import { useEffect, useState } from "react";
import OneRandomMeal from "../OneRandomMeal/OneRandomMeal"
import "./StartPage.css"

const StartPage = ({ randomMeals }) => {


  const [showCategories, setShowCategories] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllCategories().then(res => {
      setCategories(res.data.categories)
    })
  }, [])

  return (
    <>
      <button className="buttonstart" onClick={() => {
        setShowCategories(true)
      }}>→Click here to explore←</button>
      <br></br>
      <hr style={{backgroundColor:"orange", marginTop:"35px"}}></hr>
     
      {showCategories ? <div>
        {categories.map(category => <Onecategory key={category.idCategory} category={category} />)}
      </div> : <div> <p className="pick">Or pick one of our most popular meals below?</p> {randomMeals.map(meal => <OneRandomMeal key={meal.idMeal} meal={meal} />)} </div>}
    </>
  );
}

export default StartPage;