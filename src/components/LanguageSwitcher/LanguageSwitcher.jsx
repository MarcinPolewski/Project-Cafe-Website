import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../../util/i18n";

import classes from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
    const { _, i18n } = useTranslation();

    function handleLanguageChange(event) {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage); // returns a promise
    }

    const availableLanguages = SUPPORTED_LANGUAGES;
    const currentLanguage = i18n.language;

    return (
        <select
            onChange={handleLanguageChange}
            value={currentLanguage}
            className={classes.languageSwitcher}
        >
            {availableLanguages.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>);

}
