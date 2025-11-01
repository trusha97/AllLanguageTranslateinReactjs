import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
      // defaultVariables: {
      //   siteNameWithDomainLowercase: "findfast.io",
      //   siteNameWithDomain: "Findfast.io",
      //   siteName: "Findfast",
      //   siteNameWithUppercase: "FINDFAST",
      // },
    },
  });

export default i18n;