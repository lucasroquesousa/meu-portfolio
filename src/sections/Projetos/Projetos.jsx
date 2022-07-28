import React from "react";
import { Container } from "./style";
import { Element } from "react-scroll";

const Projetos = () => {
  return (
    <Container>
      <Element className="content-element" name="projetos">
        <section className="sect-project--one">
          <div className="project-one">
            <h1 className="text-h1">
              Todos os trabalhos a seguir são feitos de diferentes maneiras com
              diferentes linguagens
            </h1>
          </div>
        </section>
        <section className="sect-projects">
          <div className="projects"></div>
          <div className="projects"></div>
          <div className="projects"></div>
          <div className="projects"></div>
        </section>
      </Element>
    </Container>
  );
};

export default Projetos;
