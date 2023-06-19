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
  SubTittleList,
  TimelineContainer,
  TimelineEvent,
  ExperienciaDesc,
  DescricaoExp,
  DivExperienciaDesc,
  DivTextoExp,
  DivTituloExp,
  DivExperiencia,
  TextoTituloExp,
  TextoSubTituloExp,
  TextoExp,
  DivMapaMental,
  ImageMapa,
} from "../views/style";
import Logotipo from "../imgs/E.png";
import Seta from "../imgs/seta.png";
import Books from "../imgs/books.png";
import Overleaf from "../imgs/overleaf_og_logo.png";
import Trello from "../imgs/trello.png";
import Github from "../imgs/github.png";
import Site from "../imgs/pagina-da-internet.png";
import MapaMental from "../imgs/mapa_mental.png";

export function Main() {
  const [disciplina, setDisciplina] = useState("");
  const [isCurrentCourse, setIsCurrentCourse] = useState(false);

  let listStyle;
  if (disciplina == "PI2") {
    listStyle = <text>PROJETO INTEGRADOR II</text>;
  } else {
    listStyle = <text>PROJETO INTEGRADOR II</text>;
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
          <ExperienciaDesc>
            <DescricaoExp>
              <TextoTituloExp>Fevereiro</TextoTituloExp>
              <TextoSubTituloExp>Dia 13 até dia 28</TextoSubTituloExp>
              <DivTextoExp>
                <TextoExp>
                  No mês de Fevereiro o grupo do projeto Azulzinho se organizou
                  para começar as atividades praticas, então foi criado um
                  repositório no Github para o código do App, onde pode ser
                  acessado pelo seguinte{" "}
                  <a
                    href="https://github.com/projeto-azulzinho/AzulzinhoAppExpo"
                    target="_blank"
                  >
                    link
                  </a>
                  .
                </TextoExp>
              </DivTextoExp>
            </DescricaoExp>
          </ExperienciaDesc>
          <ExperienciaDesc>
            <DescricaoExp>
              <TextoTituloExp>Março</TextoTituloExp>
              <TextoSubTituloExp>Dia 1 até dia 31</TextoSubTituloExp>
              <DivTextoExp>
                <TextoExp>
                  No mês de Março as atividades práticas relacionadas ao projeto
                  já começaram a ser executadas, tanto na parte de hardware como
                  na de software. Como faço parte do time de software, minhas
                  atividades se voltaram para a montagem do projeto no firebase
                  e fazer a conexão do App com ele. Tendo concluído esssa parte,
                  sigo criando os modelos das classes e seus respectivos
                  controllers.
                  <p>
                    Modelos do Projeto:
                    <ul>
                      <li>Sensor</li>
                      <li>Unidade de Medida</li>
                      <li>Conjunto de Sensores</li>
                      <li>Conjunto</li>
                      <li>Grandeza</li>
                      <li>Grandeza do Sensor</li>
                      <li>Medição</li>
                      <li>Modo Coleta</li>
                    </ul>
                  </p>
                  <p>
                    Para ser possível manipular os dados no Firebase tivemos que
                    fazer alguns estudos através da{" "}
                    <a
                      href="https://firebase.google.com/docs/web/setup?hl=pt-br"
                      target="_blank"
                    >
                      {" "}
                      documentação
                    </a>{" "}
                    disponibilizada online pelo próprio site do Firebase.
                  </p>
                  <p>
                    Manipulação de dados:
                    <ul>
                      <li>
                        <a
                          href="https://firebase.google.com/docs/firestore/manage-data/add-data?hl=pt-br"
                          target="_blank"
                        >
                          Criar
                        </a>{" "}
                        dados
                      </li>
                      <li>
                        <a
                          href="https://firebase.google.com/docs/firestore/query-data/get-data?hl=pt-br"
                          target="_blank"
                        >
                          Consultar
                        </a>{" "}
                        dados
                      </li>
                      <li>
                        <a
                          href="https://firebase.google.com/docs/firestore/manage-data/add-data?hl=pt-br"
                          target="_blank"
                        >
                          Editar
                        </a>{" "}
                        dados
                      </li>
                      <li>
                        <a
                          href="https://firebase.google.com/docs/firestore/manage-data/delete-data?hl=pt-br"
                          target="_blank"
                        >
                          Excluir
                        </a>{" "}
                        dados
                      </li>
                    </ul>
                  </p>
                </TextoExp>
              </DivTextoExp>
            </DescricaoExp>
          </ExperienciaDesc>
          <ExperienciaDesc>
            <DescricaoExp>
              <TextoTituloExp>Abril</TextoTituloExp>
              <TextoSubTituloExp>Dia 1 até dia 30</TextoSubTituloExp>
              <DivTextoExp>
                <TextoExp>
                  No mês de Abril começamos a desenvolver as telas do aplicativo
                  de acordo com o design do Figma. Pra isso utilizamos o React
                  Native e alguns componentes nativos para nos ajudar a
                  construir os nossos e as telas. Os links deles estão na lista
                  abaixo e foram tirados do documento oficial online do React
                  Native.
                  <p>
                    Componentes nativos:
                    <ul>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/view"
                          target="_blank"
                        >
                          View
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/text"
                          target="_blank"
                        >
                          Text
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/textinput"
                          target="_blank"
                        >
                          TextInput
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/flatlist"
                          target="_blank"
                        >
                          FlatList
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/pressable"
                          target="_blank"
                        >
                          Presseble
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/touchableopacity"
                          target="_blank"
                        >
                          TouchableOpacity
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/image"
                          target="_blank"
                        >
                          Image
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://reactnative.dev/docs/modal"
                          target="_blank"
                        >
                          Modal
                        </a>
                      </li>
                    </ul>
                  </p>
                </TextoExp>
              </DivTextoExp>
            </DescricaoExp>
          </ExperienciaDesc>
          <ExperienciaDesc>
            <DescricaoExp>
              <TextoTituloExp>Maio</TextoTituloExp>
              <TextoSubTituloExp>Dia 1 até dia 31</TextoSubTituloExp>
              <DivTextoExp>
                <TextoExp>
                  No mês de Maio o foco foi finalizar a contrução das telas do
                  front e o integrar com os dados retirados do Firebase e fazer
                  testes em dispositivos de tamanhos diferentes para verificar a
                  responsividade. Já na parte do hardware, começamos a
                  programá-lo para se conectar com o software.
                </TextoExp>
              </DivTextoExp>
            </DescricaoExp>
          </ExperienciaDesc>
          <ExperienciaDesc>
            <DescricaoExp>
              <TextoTituloExp>Junho</TextoTituloExp>
              <TextoSubTituloExp>Dia 1 até dia 30</TextoSubTituloExp>
              <DivTextoExp>
                <TextoExp>
                  No mês de Junho o foco foi em conectar o software e hardware
                  para que pudessemos armazenar os dados no Firebase.
                </TextoExp>
              </DivTextoExp>
            </DescricaoExp>
          </ExperienciaDesc>
        </FormaDrive>
      </FundoDrive>
      <DivMapaMental>
        <ImageMapa src={MapaMental} />
      </DivMapaMental>
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
        <text>@ 2023 Emily Costa.</text>
      </ContainerLinks>
    </>
  );
}
