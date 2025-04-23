import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enUiElements from "./locales/en/uiElements.json";
import plUiElements from "./locales/pl/uiElements.json";

const RESOURCES = {
    en: { uiElements: enUiElements },
    pl: { uiElements: plUiElements },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: RESOURCES,
        fallbackLng: "en",
        ns: ["uiElements"],
        defaultNS: "uiElements",
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;

export const SUPPORTED_LANGUAGES = Object.keys(
    RESOURCES);
