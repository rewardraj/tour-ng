import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const FALLBACK_LANG = "en";
const SUPPORTED_LANGUAGES = ["en", "pl"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

const i18nConfig = {
  fallbackLng: FALLBACK_LANG,
  supportedLngs: SUPPORTED_LANGUAGES,
  defaultNS: "common",
  debug: process.env.NODE_ENV === "development",

  interpolation: {
    escapeValue: false,
  },

  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
  },

  detection: {
    order: ["querystring", "localStorage", "navigator"],
    lookupQuerystring: "lang",
    lookupLocalStorage: "preferredLanguage",
    caches: ["localStorage"],
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export { SUPPORTED_LANGUAGES, FALLBACK_LANG };
export default i18n;
