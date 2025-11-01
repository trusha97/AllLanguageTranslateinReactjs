"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { getMultipleCookies, setCookie } from "../../utils/cookieHelper";
import { languages } from "../../utils/data";
import LanguageModal from "../common/languageModal";
import ReactCountryFlag from "react-country-flag";

const Header = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [lang, setLang] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLogo, setShowLogo] = useState("gb");

  const cookieLang = getMultipleCookies("lang")?.lang;

  // Initialize language from cookie or browser
  useEffect(() => {
    const browserLanguage = navigator.language || navigator.userLanguage;
    const initialLang = cookieLang || browserLanguage;
    setLang(initialLang);
    i18n.changeLanguage(initialLang);
  }, []);

  // Handle language change
  const handleChangeLanguage = (selectedLang) => {
    i18n.changeLanguage(selectedLang);
    const segments = location.pathname.split("/");
    const newPath = segments[2]
      ? `/${selectedLang}/${segments[2]}`
      : `/${selectedLang}`;
    navigate(newPath);
    setLang(selectedLang);
    setCookie("lang", selectedLang, { sameSite: true });
    setIsModalOpen(false);
  };

  // Update flag based on current language
  useEffect(() => {
    const find = languages.find(
      (item) => item.code === window.location.pathname.split("/")[1]
    );
    const flagCode = find ? find.flagCode : "gb";
    setCookie("langlogo", flagCode, { sameSite: true });
    setShowLogo(flagCode);
  }, [lang, window.location.pathname]);

  return (
    <header className="relative w-full">
      <div className="flex justify-center mt-5 mr-[30px] max-[1450px]:mr-5 max-[1025px]:mr-[30px] gap-5 max-[1025px]:gap-0 max-[480px]:mr-[15px]">
        <div
          className="flex items-center cursor-pointer gap-[7px]"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="flex items-center gap-[2px] border-2 border-blue-65 rounded-full p-0.5 overflow-hidden">
            <ReactCountryFlag
              className="rounded-full object-cover max-[575px]:!w-[19px] max-[575px]:!h-[19px]"
              alt="Country Flag"
              countryCode={showLogo}
              svg
              style={{
                width: "25px",
                height: "25px",
              }}
            />
          </div>
        </div>
      </div>

      <LanguageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentLang={cookieLang}
        handleChangeLanguage={handleChangeLanguage}
      />
    </header>
  );
};

export default Header;
