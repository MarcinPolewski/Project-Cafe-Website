import Panel from "../components/Panel/Panel"
import classes from "./AboutPage.module.css"
import { useTranslation } from "react-i18next";

function AboutPage() {
    const { t } = useTranslation();
    return (<>
        <Panel id="backgroundPanel1">
            <div className={classes.text}>
                <h1>{t("about.title")}</h1>
                <p>{t("about.description")}</p>
                <h1>{t("about.titleAddress")}</h1>
                <p>{t("about.address")}</p>
                <h1>{t("about.titleOpenHours")}</h1>
                <p>{t("about.openingHours")}</p>

            </div>
            <iframe
                className={classes.map}
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2425.442816019264!2d21.04420871263871!3d52.23028031182585!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spl!2spl!4v1745771052120!5m2!1spl!2spl"
                width="500"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </Panel>

    </>);
}
export default AboutPage;