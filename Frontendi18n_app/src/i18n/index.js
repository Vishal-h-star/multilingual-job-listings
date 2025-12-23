import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// translation imports

// comman.json fro every lang
import arCommon from "./locales/ar/comman.json";
import enCommon from "./locales/en/comman.json";
import frCommon from "./locales/fr/comman.json";
import hiCommon from "./locales/hi/comman.json";

// jobs.json for every lang
import arJobs from "./locales/ar/jobs.json";
import enJobs from "./locales/en/jobs.json";
import frJobs from "./locales/fr/jobs.json";
import hiJobs from "./locales/hi/jobs.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: {
        common: enCommon,
        jobs: enJobs,
      },
      fr: {
        common: frCommon,
        jobs: frJobs,
      },
      ar: {
        common: arCommon,
        jobs: arJobs,
      },
      hi: {
        common: hiCommon,
        jobs: hiJobs,
      },
    },
    ns: ["common", "jobs"],
    defaultNS: "common",
  });

export default i18n;
