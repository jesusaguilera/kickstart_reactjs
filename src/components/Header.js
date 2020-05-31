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



const Header = () => {

  return (

    <header className="c-header">
      <Nav />
    </header>

  );
}

export default Header;



