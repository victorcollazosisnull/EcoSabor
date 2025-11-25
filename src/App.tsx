import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Kits from "./pages/Kits";
import Sobre from "./pages/Sobre";
import ComoFunciona from "./pages/ComoFunciona";
import Beneficios from "./pages/Beneficios";

import MainHeader from "./common/MainHeader";
import MainNav from "./common/MainNav";
import MainFooter from "./common/MainFooter";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <MainNav />

     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/kits" element={<Kits />} />
  <Route path="/sobre" element={<Sobre />} />
  <Route path="/como" element={<ComoFunciona />} />
  <Route path="/beneficios" element={<Beneficios />} />
</Routes>

      <MainFooter />
    </BrowserRouter>
  );
}

export default App;
