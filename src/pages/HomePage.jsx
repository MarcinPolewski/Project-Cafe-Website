import Panel from "../components/Panel/Panel";
import coffeeCupImage from "../static/coffeeCup.jpg"
import classes from "./HomePage.module.css"
import { useTranslation } from "react-i18next";


function HomePage() {
    const { t } = useTranslation();

    return (
        <>
            <div className={classes.imageFrame}>
                <img src={coffeeCupImage} className={classes.mainImage} alt="coffee image" />
            </div>
            <Panel id="panel1">
                {t("homePage.panel1", { defaultValue: 'def' })}
            </Panel >
            <Panel id="panel2">
                {t("homePage.panel2", { defaultValue: 'def' })}
            </Panel >
            <Panel id="panel3">
                {t("homePage.panel3", { defaultValue: 'def' })}
            </Panel >

        </>
    );


}

export default HomePage;