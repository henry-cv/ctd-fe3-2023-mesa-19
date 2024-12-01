import React, { useContext } from "react";
import LanguageContext from "../Context.jsx";

const Body = () => {
  /* CONSEJO: Utilizar useContext */
  const { languages, setLanguages } = useContext(LanguageContext);

  return (
    <div>
      {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
      <h1>Título</h1>
      <p>Descrição</p>
    </div>
  );
};

export default Body;
