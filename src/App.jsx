import "./App.css";

import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Context from "./Context";

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
