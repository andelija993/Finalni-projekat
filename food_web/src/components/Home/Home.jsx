import { useState, useEffect } from "react";
import { getRandomMeals } from "../../Service";
import StartPage from "./StartPage/StartPage";
import AboutUs from "./AboutUs"

const Home = () => {

    //const [inputSearch, setInputSearch] = useState('')
    const [randomMeals, setRandomMeals] = useState([])

    useEffect(() => {
        getRandomMeals().then(res => {
            setRandomMeals(res.data.meals)
        })
    }, [])

    return (
        <>
            <AboutUs />
            <br></br>
            
            <StartPage randomMeals={randomMeals} />
        </>
    );
}

export default Home;