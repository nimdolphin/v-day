import { Link } from "react-router-dom";
import ButtonPuc from "./ButtonPuc.jsx";
import puc from "./puc.jpeg";
import heart from "./heart.png";
import "./App.scss";

const MainPage = () => {
  return (
    <div className="App">
      <img className="heart" src={heart} alt="heart" />
      <img className="catty" src={puc} alt="puc" />
      <Link to={"/love-page"}>
        <ButtonPuc text="пук-пук =ˆ-ˆ=" />
      </Link>
    </div>
  );
};

export default MainPage;
