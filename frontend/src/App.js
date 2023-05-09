import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/navBar.js";

// Pages ->
import HomePage from "./Pages/HomePage/homePage";
import TopOffer from "./Pages/OfferPage/TopOffer";
import Fashion from "./Pages/OfferPage/fashion";
import Tv from "./Pages/OfferPage/tv";
import Electronics from "./Pages/OfferPage/electronics";
import Mobiles from "./Pages/OfferPage/mobiles";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/top-offers" element={<TopOffer />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/top-offers" element={<Tv />} />
        <Route path="/top-offers" element={<Electronics />} />
        <Route path="/top-offers" element={<Mobiles />} />
      </Routes>
    </Router>
  );
}

export default App;
