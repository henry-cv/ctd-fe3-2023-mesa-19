import { createContext, useContext, useState } from "react";
import EN from "./languages/english.json";
import PTBR from "./languages/portuguese.json";
import ES from "./languages/spanish.json";
import { useEffect } from "react";

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
  const [language, setLanguage] = useState(languages["english"]);
  //
  console.log("Context, language recien iniciado estado: ");
  console.log(language);

  const handleChangeLA = () => {
    console.log("language al inicio de changeLA: ")
    console.log(language);
    const LANGID = {
      EN: languages["spanish"],
      ES: languages["portuguese"],
      PTBR: languages["english"],
    };

    setLanguage((language) => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
      console.log("handleChangeLA, language:");
      console.log(language);
      return LANGID[language.id];
    });
  };
  /* useEffect(() => {
    handleChangeLA();
  }, [language]); */

  return (
    <LanguageContext.Provider value={{ language, setLanguage, handleChangeLA }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Context;
export const useLanguageContext = () => useContext(LanguageContext);
