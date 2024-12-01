import React, { useContext } from "react";
import "../App.css";
import { useLanguageContext } from "../Context.jsx";

const Navbar = () => {
  /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
    */
  const { language, handleChangeLA } = useLanguageContext();

  console.log("----Navbar-----");
  console.log("contexto Lenguaje : ");
  console.log(language);
  const { home, current, button } = language.text;
  const { id } = language;

  return (
    <div className="navbar">
      {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
      <p>{home}</p>
      <p>
        {current}: {id}
      </p>
      <button onClick={() => handleChangeLA()}>{button}</button>
    </div>
  );
};

export default Navbar;
