import React from "react";
import NavBar from "../NavBar/NavBar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import accesIcon from "../../assets/img/accesIcon.png";
import { Container } from "./style";
const Header = () => {
  return (
    <Container>
      <div className="content-logo--header">
        <h1 className="title-logo">
          <FaChevronLeft />
          Lucas Roque <p> /</p>
          <FaChevronRight />
        </h1>
        <img src={accesIcon} alt="" className="icon-header" />
      </div>
      <NavBar />
    </Container>
  );
};

export default Header;
