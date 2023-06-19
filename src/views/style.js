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
  height: auto;
  margin-top: 1%;
`;
export const FormaDrive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 70%;
  height: 100%;

  background-color: #ffff;
  border-radius: 2rem;
  padding: 3%;
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
  min-height: 20vh;

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
  margin: 16px 0px;
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
export const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const TimelineEvent = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: #ccc;
    transform: translateY(-50%);
  }

  &:first-child:before {
    display: none;
  }
`;
export const DivExperiencia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: auto;

  margin-top: 80px;
`;
export const DivFundoExperiencia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 70%;
  height: auto;

  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 6px 6px 80px 8px;

  border-radius: 30px;

  @media (max-width: 320px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 95%;
  }
`;
export const DivExperienciaDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 80%;

  border-left: 5px solid #72ffcc;

  margin: 60px;
`;
export const ExperienciaDesc = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: auto;

  margin-top: 20px;
  margin-left: -15px;
  &::before {
    content: "";
    width: 25px;
    height: 25px;

    border-radius: 50%;
    background-color: #c48007;
  }
`;
export const DescricaoExp = styled.div`
  width: 100%;
  height: auto;
`;
export const DivTituloExp = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  margin-left: -5px;

  &::before {
    content: "";
    width: 60px;
    height: 5px;

    background-color: #72ffcc;
  }
`;
export const Texto = styled.div`
  font-family: "Inder", sans-serif;
  color: #72ffcc;
  font-weight: 900;
  font-size: 40px;

  margin-top: -25px;
  margin-left: 20px;
`;
export const CirculosContainer = styled.div`
  width: auto;
  height: auto;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 0%;
    width: 80%;
    height: auto;
  }
`;
export const CirculoPrin = styled.div`
  width: 500px;
  height: 500px;

  border-radius: 50%;

  margin-top: -500px;
  margin-left: -20px;

  background-color: #72ffcc;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;

  &:hover {
    transform: translateX(30px);
  }
  @media (max-width: 576px) {
    width: 8rem;
    height: 8rem;

    margin: 0%;
    &:hover {
      transform: translateX(-30px);
    }
  }
  @media (max-width: 320px) {
    width: 8rem;
    height: 6rem;

    margin-top: 0%;
    &:hover {
      transform: translateX(-30px);
    }
  }
`;
export const CirculoSec = styled.div`
  width: 500px;
  height: 500px;

  margin-left: -50px;
  margin-top: 80px;

  border-radius: 50%;

  background-color: #d9d9d9;

  @media (max-width: 576px) {
    width: 13rem;
    height: 13rem;

    margin: 0%;
  }
  @media (max-width: 320px) {
    width: 11rem;
    height: 9rem;

    margin: 0%;
  }
`;
export const Prin = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;

  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
  @media (max-width: 320px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;
export const TextoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;

  margin-top: 30px;
  @media (max-width: 320px) {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }
  @media (max-width: 576px) {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }
  @media (min-width: 577px) and (max-width: 1024px) {
    margin-left: 50px;
  }
`;
export const TextoPrin = styled.div`
  font-family: "Inder", sans-serif;
  font-size: 40px;

  font-weight: 600;
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;
export const TextoSec = styled.div`
  font-family: "Inder", sans-serif;
  font-size: 20px;
  color: gray;
  @media (max-width: 320px) {
    font-size: 1rem;
  }
`;
export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 100px;

  gap: 20px;
  @media (max-width: 320px) {
    margin-top: 5%;
    width: 100%;
    height: auto;
    justify-content: space-around;
  }
  @media (max-width: 575px) {
    margin-top: 5%;
    width: 100%;
    height: auto;
    justify-content: space-around;
  }
`;
export const LogoRedes = styled.a`
  width: 40px;
  height: 40px;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  @media (max-width: 320px) {
    width: 2rem;
    height: 2rem;
  }
`;
export const MySkills = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: 50px;

  border-radius: 10px;
  background-color: #ffd291;

  font-family: "Inder", sans-serif;
  font-size: 20px;
  font-weight: 1000;

  @media (max-width: 320px) {
    width: auto + 1px;
    height: auto + 0.1px;
    font-size: 1rem;
  }
  @media (max-width: 576px) {
    margin-top: 0px;
    margin-right: 0px;
  }
`;
export const TextoTituloExp = styled.div`
  margin-left: 10px;
  font-family: "Inder", sans-serif;
  font-weight: 600;
  font-size: 20px;
`;
export const TextoSubTituloExp = styled.div`
  margin-left: 10px;
  font-family: "Inder", sans-serif;
  font-weight: 400;

  color: gray;
  margin-top: 5px;
`;
export const TextoExp = styled.div`
  font-family: "Inder", sans-serif;
  text-align: justify;
`;
export const DivTextoExp = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
  margin-left: 10px;
  width: auto;
  height: auto;

  background-color: #ffe8a9;
  border: 30px;
  border-radius: 15px;

  padding: 10px;

  font-size: 18px;
`;
export const DivPrin = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: auto;
  height: auto;

  @media (max-width: 576px) {
    flex-direction: row;
    margin-top: 60px;
  }
  @media (max-width: 320px) {
    flex-direction: row;
    justify-content: center;

    margin-top: 60px;
  }
`;
export const DivMySkills = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  width: auto;
  height: auto;

  gap: 30px;

  @media (max-width: 320px) {
    height: auto;
    margin-top: 10%;
  }
  @media (max-width: 576px) {
    height: auto;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10%;
  }
`;
export const DivMapaMental = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-bottom: 3%;
`;
export const ImageMapa = styled.img`
  width: 80%;
`;
