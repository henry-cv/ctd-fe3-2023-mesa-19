import "./App.css";
import React, { useState } from "react";
import { Context } from "./Context.jsx";
import LanguageContext from "./Context.jsx";

import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
  const [language, setLanguage] = useState({ language: "english" });

  const handleChangeLA = () => {
    setLanguage(() => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
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
