import React from "react";
import { Container } from "./style";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const NavBar = () => {
  return (
    <Container>
      <ul className="ul-content">
        <li className="li-nav">
          <Link to="inicio" className="link-style">
            Inicio
          </Link>
        </li>
        <li className="li-nav">
          <Link to="projetos" className="link-style">
            Projetos
          </Link>
        </li>
        <li className="li-nav">
          <Link to="sobre" className="link-style">
            Sobre
          </Link>
        </li>
        <li className="li-nav">
          <Link className="link-style" to="contato">
            Contato
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
