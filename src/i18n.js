import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commmonEN from "./locales/en/common.json";
import commmonPL from "./locales/pl/common.json";

const RESOURCES = {
    en: { common: commmonEN },
    pl: { common: commmonPL },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: RESOURCES,
        fallbackLng: "en",
        ns: ["common"],
        defaultNS: "common",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
export const SUPPORTED_LANGUAGES = Object.keys(
    RESOURCES);

