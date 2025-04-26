import coffeeCupImage from "../static/coffeeCup.jpg"
import classes from "./HomePage.module.css"


function HomePage() {
    return (
        <div className={classes.imageFrame}>
            <img src={coffeeCupImage} className={classes.mainImage} alt="coffee image" />
        </div>);


}

export default HomePage;