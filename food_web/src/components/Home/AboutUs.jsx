

const AboutUs = () => {

const styles={
    name:{
        textAlign:"center",
        fontSize:"35px",
        fontFamily: "cursive"
     
},
    text: {
   float:"left",
   width:"40%",
   marginLeft:"80px",
   marginTop:"80px",
   fontSize:"23px"
},
    img:{
        marginLeft:"90px",
        width:"500px",
        marginTop:"20px"
    },
    ps:{
        width: "390px"

    }
}

    return ( 
    <div>
        <br/>
        <p style={styles.name}>What are you cooking today?</p>
        <div style={styles.text}>
        <p style={styles.ps}>Are you enough of junk food and trowing money on expensive meals? Are you tired of making same dishes and have no idea what to cook next? If one of those is correct, this website is a right place for you. Feel free to explore...
            If you don't have time or you are out of home, no problem. Just type informations about you on Register page and you'll be able to save recipes you like for some next time.
            We hope you'll enjoy!
            For any suggestions, feel free to contact us. :) </p>
        </div>
        
        <img style={styles.img} src="./home-img.png" alt="food"/>


            
            

        
    </div> );
}
 
export default AboutUs;