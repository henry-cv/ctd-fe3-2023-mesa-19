import React, { useContext } from "react";
import { useLanguageContext } from "../Context.jsx";

const Body = () => {
  /* CONSEJO: Utilizar useContext */
  //const variable = useLanguageContext();
  const { language } = useLanguageContext();
  /* console.log("variable en Body")
  console.log(variable); */
  /* console.log("Language: ")
  console.log(language) */
  return (
    <div>
      {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
      <h1>{language.text.title}</h1>
      <p>{language.text.description}</p>
    </div>
  );
};

export default Body;
