import { Routes, Route } from "react-router-dom";
import LovePage from "./LovePage.jsx";
import MainPage from "./MainPage.jsx";
import Perduc from "./Perduc.jsx";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="love-page" element={<LovePage />} />
        <Route path="and-you" element={<Perduc />} />
        <Route path="v-day" element={<App />} />
      </Routes>
    </>
  );
}

export default App;
