import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

export default function LanguageSwitcher() {
    const { _, i18n } = useTranslation();

    function handleLanguageChange(event) {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage); // returns a promise
    }

    const availableLanguages = SUPPORTED_LANGUAGES;
    const currentLanguage = i18n.language;

    return (
        <select onChange={handleLanguageChange} value={currentLanguage}>
            {availableLanguages.map((language) => (
                <option key={language} value={language}>
                    {language}
                </option>
            ))}
        </select>);

}
