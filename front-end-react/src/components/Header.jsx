import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <h2 className="title">Devmountain Eatery</h2>
      <nav>
        <Link to="" className="nav-btn">Home</Link>
        <Link to="/newRecipe" className="nav-btn">Add Recipe</Link>
      </nav>
    </header>
  );
};

export default Header;
