import React, { useContext } from "react";
import "../App.css";
import { useLanguageContext } from "../Context.jsx";

const Navbar = () => {
  /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    COnsejo: Descomentar este bloque de código, cuando "App.jsx" ya tenga un proveedor
    */
  const { language } = useLanguageContext();
  const contexto = useLanguageContext();
  console.log("Navbar")
  console.log(language);
  const { text } = language;
  const { id } = language;

  console.log("text");
  console.log(text);

  return (
    <div className="navbar">
      {/* CONSEJO: Renderizar la información traida del contexto de forma dinamica */}
      <p>{text.home}</p>
      <p>{text.current}: {id}</p>
      <button>{text.button}</button>
    </div>
  );
};

export default Navbar;
