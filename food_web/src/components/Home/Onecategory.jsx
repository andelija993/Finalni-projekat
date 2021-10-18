import { useHistory } from "react-router";

const Onecategory = ({ category }) => {
    const history = useHistory()
    const styles = {
        container: {
            borderRadius: '26px',
            display: "inline-block",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: "30px",
            gap: "10px",
            justifyContent: "center",
            cursor: "pointer"
        },
        recipe: {
            borderRadius: '26px',
            display: "inline-block",
            flexDirection: "column",
            padding: "30px",
            width: "350px",
            boxShadow: "0 3px 10px 0 #dfa248"
        },
        name: {
            fontSize: "18px",
            fontWeight: "bold",
            color: "black",
            margin: "10px 0",
            textAlign: "center"
        }
    }



    return (
        <div style={styles.container} onClick={() => {
            history.push(`/mealsByCategory/${category.strCategory}`)
        }}>
            
            <div style={styles.recipe} >
                <img style={{width:"320px", cursor: "pointer",borderRadius: '30px', alignItems: 'center' }} src={category.strCategoryThumb} alt="category" />
                <p style={styles.name}>Category: {category.strCategory}</p>
            </div>
        </div>

    );
}

export default Onecategory;

// getMealsByCategory(category.strCategory).then(res=>{
//     console.log(res.data.meals);
//     setFindMeal(res.data.meals)
// }) 