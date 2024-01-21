import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";


const HomePage: React.FC = () => {
  return (
    <div className="Landingpage">
      <nav className="Landingpagenav">
        <Link to="/register">registreer</Link>
        <Link to="/login">login</Link>
        <Link to="/registerbedrijven">registerbedrijven</Link>
        <Link to="/loginbedrijven">loginbedrijven</Link>
      </nav>
    </div>
  );
};

export default HomePage;
