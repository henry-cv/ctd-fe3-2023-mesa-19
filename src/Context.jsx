import { createContext, useContext, useState } from "react";
import EN from "./languages/english.json";
import PTBR from "./languages/portuguese.json";
import ES from "./languages/spanish.json";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

export const languages = {
  english: {
    id: "EN",
    text: EN,
  },
  spanish: {
    id: "ES",
    text: ES,
  },
  portuguese: {
    id: "PTBR",
    text: PTBR,
  },
  /* SUGERENCIA: agregue los demás idiomas */
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */

export const LanguageContext = createContext();

const Context = ({ children }) => {
  const [language, setLanguage] = useState({ languages: "english" });
  /* const handleChangeLA = () => {
    console.log("Estoy en handle Change Languages");
    console.log(Object.keys(languages));
    console.log(Object.values(languages));
    setLanguage((prevState) => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
      console.log("prevState: ");
      console.log(prevState);
    });
  }; */

  /* console.log(languages);
  console.log(languages.english) */
  //console.log(language);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const handleChangeLA = () => {
  setLanguage((language) => {
    //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
    console.log(language);
    if (language === "english") {
      return { language: "spanish" }
    } else if (language === "spanish") {
      return { language: "portuguese" }
    } else if (language === "portuguese") {
      return { language: "english" }
    }
  });
};
export default Context
export const useLanguageContext = () => useContext(LanguageContext);
