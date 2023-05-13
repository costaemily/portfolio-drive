import styled from "styled-components";

export const Fundo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 32px;

  width: 100%;
  min-height: 100vh;

  background-color: #13293d;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 10vh;

  background-color: white;
`;
export const Logo = styled.div`
  width: 10%;
  height: 10vh;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
export const Opcoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
`;
export const Lista = styled.select`
  width: 45%;
  height: 40%;

  border: 0px;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
`;
export const FundoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 32px;

  margin-top: 5%;
`;
export const Titulo = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 5rem;

  color: #c48007;
`;
export const SubTitulo = styled.h1`
  margin-top: -20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.7rem;

  color: #fff;
`;
export const BotaoSeta = styled.a`
  width: 60px;
  height: 60px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;

  cursor: pointer;
`;
export const FundoDrive = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 150vh;
  margin-top: 1%;
`;
export const FormaDrive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 70%;
  height: 100%;

  background-color: #ededed;
  border-radius: 2rem;
  border: 7px solid #30699c;
`;
export const TituloLista = styled.h2`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.7rem;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 200vh;
  min-height: 90%;

  gap: 10%;
`;
export const ContainerBook = styled.div`
  width: 50vh;
  min-height: 50vh;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
export const ContainerTittle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 17%;

  background-color: #30699c;
  border-radius: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  font-weight: 700;

  color: white;
`;
export const ContainerAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  gap: 32px;
  width: 100%;
  min-height: 80%;
`;
export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;

  width: 100%;
  min-height: 30vh;
  margin-top: 3%;
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  gap: 64px;

  width: 80%;
  min-height: 70%;
  margin-bottom: 2%;
`;
export const SocialLink = styled.a`
  width: 40px;
  height: 40px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;

  cursor: pointer;
`;
export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 32px;

  width: 80%;
  min-height: 80%;
`;
export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: auto;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &::before {
    content: "";
    width: 25px;
    height: 25px;

    margin-right: 3%;
    border-radius: 50%;
    background-color: #30699c;
  }
`;
export const ContainerInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  height: auto;
`;
export const TittleList = styled.div`
  font-family: "Inder", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
`;
export const SubTittleList = styled.div`
  font-family: "Inder", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #474747;
`;
export const ContainerTextBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: auto;

  background-color: #b3d9ff;
  border-radius: 1rem;
  font-family: "Inder", sans-serif;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: justify;
  padding: 2%;
  margin-top: 3%;
  margin-bottom: 3%;
`;
export const TittleLinks = styled.div`
  font-family: "Inder", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #c48007;
  padding: 2%;
`;
