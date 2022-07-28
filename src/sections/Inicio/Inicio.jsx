import React from "react";
import { Element } from "react-scroll";

import { Container } from "./style";

const Inicio = () => {
  return (
    <Container id="container-inicio">
      <Element className="content-inicio" name="inicio">
        <div className="content-wellcome">
          <h2 className="sbv">Seja Bem vindo ao meu espaço de trabalho</h2>
          <p className="text-p--inicio">
            Sou Desenvolvedor Front-End e Freelancer.
          </p>
          <p className="text-p--inicio">
            Fique a vontade e avalie o meu trabalho.
          </p>
        </div>
        <div className="div-algum-efeito"></div>
      </Element>
    </Container>
  );
};

export default Inicio;
