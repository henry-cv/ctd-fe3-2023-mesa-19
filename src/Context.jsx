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

const LanguageContext = createContext();

export const Context = ({ children }) => {
  const [language, setLanguage] = useState({
    languages: english,
  });
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export default LanguageContext;
export const useLanguageContext = () => useContext(LanguageContext);
