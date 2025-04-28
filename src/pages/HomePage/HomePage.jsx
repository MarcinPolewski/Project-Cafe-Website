import Panel from "../../components/Panel/Panel";
import classes from "./HomePage.module.css"
import { useTranslation } from "react-i18next";

import coffeeCupImage from "../../static/coffeeCup.jpg"
import coffeeMakerImage from "../../static/coffeeMaker.jpg"
import coffeeOnTable from "../../static/coffeeOnTable.jpg"
import ImageView from "../../components/ImageView/ImageView";
import cafeCounterImg from "../../static/cafeCounter.jpg";
import cafeGardenImg from "../../static/cafeGarden.jpg";
import cafeTablesImg from "../../static/cafeTables.jpg";
import coffeePouringImg from "../../static/coffeePouring.jpg";


const IMAGES = [
    cafeCounterImg,
    cafeGardenImg,
    cafeTablesImg,
    coffeePouringImg,
];

function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <div className={classes.imageMainFrame}>
                <img src={coffeeCupImage} className={classes.mainImage} alt="coffee image" />
            </div>
            <Panel id="panel1">
                <img src={coffeeMakerImage} className={classes.PanelImg} alt="coffeeMaker" />
                <div className={classes.textDiv}><span>{t("homePage.panel1", { defaultValue: 'def' })}</span></div>
            </Panel >
            <Panel id="panel2">
                <div className={classes.textDiv}><span>{t("homePage.panel2", { defaultValue: 'def' })}</span></div>
                <img src={coffeeOnTable} className={classes.PanelImg} alt="coffeeMaker" />
            </Panel >
            <ImageView images={IMAGES} />
            {/* <Panel id="panel3">
                {t("homePage.panel3", { defaultValue: 'def' })}
            </Panel > */}

        </>
    );


}

export default HomePage;