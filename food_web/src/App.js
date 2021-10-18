import Home from "./components/Home/Home"
import Basket from "./components/Basket/Basket"
import Login from "./components/Login/Login"
import Registration from "./components/Registration/Registration"
import MealsByCategory from "./components/Home/MealsByCategory"
import MealById from "./components/Home/MealById/MealById"
import { useState } from "react"
import "./App.css"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  const [user, setUser] = useState(null)

  return (
    <div>
      <Router>  
        <nav className="header" >
          <div className="nav">
          <img src="hamburger.svg" alt="hamb" className="hamburger"/>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/basket">My favourites</Link>
          
          </div>
        </nav>
  
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/login">
            <Login user = {user} setUser={setUser}/>
          </Route>

          <Route exact path="/registration">
            <Registration setUser={setUser}/>
          </Route>

          <Route exact path="/basket">
            <Basket loggedIn={user} setLoggedIn = {setUser}/>
          </Route>

          <Route exact path="/mealsByCategory/:category">
            <MealsByCategory/>
          </Route>

          <Route exact path="/mealById/:mealId">
            <MealById loggedIn={user}/>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
