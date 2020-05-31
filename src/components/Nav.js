// Libs
import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {

  return (

      <nav className="c-nav">
        <ul className="c-nav__list">
          <li>
            <Link to="/" className="c-nav__link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="c-nav__link">About</Link>
          </li>
        </ul>
      </nav>

  );
}

export default Nav;



