import React, { useContext } from "react";
import { useLanguageContext } from "../Context.jsx";

const Body = () => {
  /* CONSEJO: Utilizar useContext */
  const { language } = useLanguageContext();
  console.log("Body.jsx");
  console.log("contexto Language: ");
  console.log(language);
  const { title, description } = language.text;
  return (
    <div>
      {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Body;
