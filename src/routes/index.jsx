import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../components/home";
import { getMultipleCookies, setCookie } from "../utils/cookieHelper";
import { useTranslation } from "react-i18next";

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const { lang } = getMultipleCookies("lang");
  const navigate = useNavigate();
  const location = useLocation();
  const urlLang = location.pathname.split("/")[1];
  const { lang: cookieLang } = getMultipleCookies("lang");
  let token = false;

  useEffect(() => {
    const browserLanguage =
      lang || navigator.language || navigator.userLanguage;
    if (!lang) {
      setCookie("lang", "en", {
        sameSite: true,
      });
    }
    if (location.pathname.split("/")[1] === "") {
      navigate(token ? `/${browserLanguage}/dash` : `/${browserLanguage}/`);
    }
  }, []);

  useEffect(() => {
    if (urlLang && urlLang !== cookieLang) {
      setCookie("lang", urlLang, { sameSite: true });
      i18n.changeLanguage(urlLang);
    }

    if (["ar", "he"].includes(urlLang)) {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [urlLang]);

  return (
    <Routes>
      <Route path="/:lang/" element={<HomePage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
