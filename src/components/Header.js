import { Link, Route, Routes } from "react-router-dom";
import logo from "../assets/img/pizza-logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>Mamamia Pizza</h1>
              <p>навіть італійці в шоці від нашої піцци</p>
            </div>
          </div>
        </Link>
        <Routes>
          <Route path="/" element={<Button />} />
        </Routes>
      </div>
    </div>
  );
};

export default Header;
