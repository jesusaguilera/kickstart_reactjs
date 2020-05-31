// Libs
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

import Nav from './Nav';
import Logo from './Logo';



const Header = () => {

  return (

    <header className="c-header">
      <Logo />
      <Nav />
    </header>

  );
}

export default Header;



