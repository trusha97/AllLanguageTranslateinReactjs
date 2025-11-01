import ReactCountryFlag from "react-country-flag";
import { t } from "i18next";
import { languages } from "../../utils/data";
import ModalComponent from "./commonModal";


const LanguageModal = ({
  isOpen,
  onClose,
  currentLang,
  handleChangeLanguage,
}) => {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <div className="px-[5px] py-[5px] sm:px-[10px] sm:py-[10px]">
        <div className="pt-[38px]">
          <div className="max-h-[570px] overflow-y-auto">
            <h2 className="text-[28px] font-medium text-center mb-[25px]">
              {t("LANGUAGE")}
            </h2>

            <div>
              {languages?.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleChangeLanguage(item?.code, item?.flagCode)
                  }
                  className={`w-full flex justify-center cursor-pointer items-center py-[10px] gap-[10px] mb-[2px] transition-colors ${
                    currentLang === item?.code
                      ? "bg-blue-50 text-white rounded-[24px] shadow-white-100"
                      : "hover:text-blue-200"
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={item?.flagCode}
                    svg
                    style={{
                      width: "22px",
                      height: "22px",
                    }}
                    className="rounded-full object-cover"
                  />
                  <span
                    className={`text-[20px] font-[400] ${
                      currentLang === item?.code ? "font-medium" : ""
                    }`}
                  >
                    {item?.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModalComponent>
  );
};

export default LanguageModal;
