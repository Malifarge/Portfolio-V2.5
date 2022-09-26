import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from "./Components/Header";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Projets from "./Pages/Projets";

import "./Style/style.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contacts" element={<Contacts/>}/>
          <Route path="/Projets" element={<Projets/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
