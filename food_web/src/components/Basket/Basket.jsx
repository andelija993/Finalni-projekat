import "./Basket.css"
import Favourites from "./Favourites";

const Basket = ({loggedIn, setLoggedIn}) => {
  console.log(loggedIn)
 

  return (
    <div>
      { loggedIn == null ? <section>
      <div className="container">
      <h3>  Please login or register first :) </h3>
      </div>
    </section> : <Favourites loggedIn={loggedIn} setLoggedIn = {setLoggedIn} />}

    </div>
  

  );
}

export default Basket;