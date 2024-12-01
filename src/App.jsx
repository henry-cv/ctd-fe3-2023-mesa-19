import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Context from "./Context";
import { languages } from "./Context";

function App() {
  const [language, setLanguage] = useState({ language: "english" });
  console.log("APP")
  console.log("languages");
  console.log(languages);
  console.log("----APP-------")
  console.log(language);
  const handleChangeLA = () => {
    setLanguage((language) => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
      if (language === "english") {
        return { language: "spanish" }
      } else if (language === "spanish") {
        return { language: "portuguese" }
      } else if (language === "portuguese") {
        return { language: "english" }
      }
    });
  };

  return (
    <div className="App">
      <>
        {/* SUGERENCIA: Agregue el Provider de LanguageContext */}
        <Context>
          <Navbar />
          <Body />
        </Context>
      </>
    </div>
  );
}

export default App;
