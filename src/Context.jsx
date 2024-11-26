import { createContext, useContext, useState } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

const LanguageStates = createContext();
export const languages = {
  english: {
    id: "EN",
    text: EN
  },
  spanish: {
    id: "ES",
    text: ES
  },
  portuguese: {
    id: "PTBR",
    text: PTBR
  }
  /* SUGERENCIA: agregue los demás idiomas */
};
const Context = () => {
  const [language, setLanguage] = useState({
    languages: english
  });
  return (
    <LanguageStates.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageStates.Provider>

  )
}
/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageContext = "";

export default Context;
export const useLanguageStates = () => useContext(LanguageStates);