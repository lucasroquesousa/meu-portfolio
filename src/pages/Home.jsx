import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Contatos from "../sections/Contatos/Contatos";
import Inicio from "../sections/Inicio/Inicio";
import Projetos from "../sections/Projetos/Projetos";
import Sobre from "../sections/Sobre/Sobre";

const Home = () => {
  return (
    <>
      <Header />
      <Inicio />
      <Projetos />
      <Sobre />
      <Contatos />
    </>
  );
};

export default Home;
