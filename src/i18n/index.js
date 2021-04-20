import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import es from "./locales/en.json";
import en from "./locales/en.json";


i18n
    .use(LanguageDetector) // i18next plugin for language detection
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        lng: 'es',
        fallbackLng: 'es',

        interpolation: {
            escapeValue: false
        }
    });

    export default i18n;
