
import { LANGUAGES } from "../locales/languages";
import i18n from "../i18n";

export default function LanguageSwitcher() {
    function handleLanguageChange(event) {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }

    return (
        <select onChange={handleLanguageChange} value={i18n.language}>
            {LANGUAGES.map((language) => (
                <option key={language.code} value={language.code}>
                    {language.name}
                </option>
            ))}
        </select>);

}
