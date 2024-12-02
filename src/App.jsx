import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Context, { useLanguageContext } from "./Context";
import { useState } from "react";

function App() {

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
