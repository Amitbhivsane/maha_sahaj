import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Text translations
import enTranslation from "../public/locales/en/translation.json";
import hiTranslation from "../public/locales/hi/translation.json";
import maTranslation from "../public/locales/ma/translation.json";

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      ma: { translation: maTranslation },
    },
    lng: "en", // default language
    fallbackLng: "en",
    supportedLngs: ["en", "hi", "ma"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
  });

export default i18n;
