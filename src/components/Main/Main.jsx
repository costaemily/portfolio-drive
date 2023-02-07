import React from "react";
import {
  BotaoSeta,
  Fundo,
  Logo,
  Nav,
  Opcoes,
  SubTitulo,
  Titulo,
  Lista,
} from "./style";
import Seta from "../../imgs/seta.png";
import Logotipo from "../../imgs/E.png";

function Main() {
  return (
    <div>
      <Nav>
        <Logo src={Logotipo} />
        <Opcoes>
          <Lista name="disciplina">
            <option value="">Selecione uma Disciplina</option>
            <option value="PI1">Projeto Integrador I</option>
            <option value="PI2">Projeto Integrador II</option>
          </Lista>
        </Opcoes>
      </Nav>
      <Fundo>
        <Titulo>Emily's Portfolio</Titulo>
        <SubTitulo>Profª: Hellen de Freitas Santos</SubTitulo>
        <BotaoSeta src={Seta} />
      </Fundo>
    </div>
  );
}

export default Main;
