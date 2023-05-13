import React, { useEffect, useState } from "react";
import {
  BotaoSeta,
  Fundo,
  Logo,
  Nav,
  Opcoes,
  SubTitulo,
  Titulo,
  Lista,
  FundoDrive,
  FormaDrive,
  TituloLista,
  ListComponent,
  ItemList,
  FundoInfo,
  Container,
  ContainerBook,
  ContainerTittle,
  ContainerLinks,
  ContainerAll,
  SocialLink,
  ContainerList,
  ListItem,
  TittleList,
  ContainerInfo,
  ContainerTextBody,
  Links,
  TittleLinks,
  SubTittleList,
} from "../views/style";
import Logotipo from "../imgs/E.png";
import Seta from "../imgs/seta.png";
import Books from "../imgs/books.png";
import Overleaf from "../imgs/overleaf_og_logo.png";
import Trello from "../imgs/trello.png";
import Github from "../imgs/github.png";
import Site from "../imgs/pagina-da-internet.png";

export function Main() {
  const [disciplina, setDisciplina] = useState("");
  const [isCurrentCourse, setIsCurrentCourse] = useState(false);

  let listStyle;
  if (disciplina == "PI2") {
    listStyle = <text>PROJETO INTEGRADOR II</text>;
  } else {
    listStyle = <text>SELECIONE UMA DISCIPLINA</text>;
  }

  const RenderList = () => {
    return (
      <>
        <text>Emily da Silva Costa</text>
      </>
    );
  };

  return (
    <>
      <Fundo>
        <Nav>
          <Logo src={Logotipo} />
          <Opcoes>
            <Lista
              name="disciplina"
              value={disciplina}
              onChange={(texto) => setDisciplina(texto.target.value)}
            >
              <option value="PI2">Projeto Integrador II</option>
            </Lista>
          </Opcoes>
        </Nav>
        <Container>
          <FundoInfo>
            <Titulo>Emily's Portfolio</Titulo>
            <SubTitulo>Profª: Hellen de Freitas Santos</SubTitulo>
          </FundoInfo>
          <ContainerBook src={Books} />
        </Container>
        <BotaoSeta src={Seta} href="#InfoPortfolio" />
      </Fundo>
      <FundoDrive id="InfoPortfolio">
        <FormaDrive>
          <ContainerTittle>{listStyle}</ContainerTittle>
          <ContainerAll>
            <ContainerList>
              <ListItem>
                <ContainerInfo>
                  <TittleList>Fevereiro</TittleList>
                  <SubTittleList>Dia 13 até dia 28</SubTittleList>
                  <ContainerTextBody>
                    No mês de Fevereiro o grupo do projeto Azulzinho se
                    organizou para começar as atividades praticas, então foi
                    criado um repositório no Github para o código do App.
                  </ContainerTextBody>
                </ContainerInfo>
              </ListItem>
              <ListItem>
                <ContainerInfo>
                  <TittleList>Março</TittleList>
                  <SubTittleList>Dia 1 até dia 31</SubTittleList>
                  <ContainerTextBody>
                    No mês de Março as atividades práticas relacionadas ao
                    projeto já começaram a ser executadas, tanto na parte de
                    hardware como na de software. Como faço parte do time de
                    software, minhas atividades se voltaram para a montagem do
                    projeto no firebase e fazer a conexão do App com ele. Tendo
                    concluído esssa parte, sigo criando as classes e seus
                    respectivos controllers.
                  </ContainerTextBody>
                </ContainerInfo>
              </ListItem>
              <ListItem>
                <ContainerInfo>
                  <TittleList>Abril</TittleList>
                  <SubTittleList>Dia 1 até dia 30</SubTittleList>
                  <ContainerTextBody>
                    No mês de Abril começamos a desenvolver as telas do
                    aplicativo de acordo com o design do Figma e então a fazer a
                    integração dos dados com o front.
                  </ContainerTextBody>
                </ContainerInfo>
              </ListItem>
            </ContainerList>
          </ContainerAll>
        </FormaDrive>
      </FundoDrive>
      <ContainerLinks>
        <Links>
          <SocialLink
            src={Overleaf}
            href="https://www.overleaf.com/read/vrnnddhskdfn"
            target="_blank"
          />
          <SocialLink
            src={Trello}
            href="https://trello.com/b/MVRxyYUb/bal%C3%A3o-estratosf%C3%A9rico"
            target="_blank"
          />
          <SocialLink
            src={Github}
            href="https://github.com/projeto-azulzinho/AzulzinhoAppExpo"
            target="_blank"
          />
          <SocialLink
            src={Site}
            href="https://projetoestratosfer.wixsite.com/balao"
            target="_blank"
          />
        </Links>
        <text>@ 2023 Emily Costa. All Rights Reserved.</text>
      </ContainerLinks>
    </>
  );
}
