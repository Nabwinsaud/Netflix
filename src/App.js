import Header from "./components/header/Header";
import HeroSection from "./components/hero/Herosection";
// so header and hersection are wrapped inside Home now
// import Home from "./components/header/Home";
// import Domtest from "./domtest";
import AuthContextProvider from "./context/AuthContext";
// import react router
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <AuthContextProvider>
      <Header />
      {/* header i.e navbar will be shown on all page */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
