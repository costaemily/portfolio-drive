import styled from "styled-components";

export const Fundo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 32px;

  width: 100%;
  height: 500px;

  background-color: #13293d;
`;
export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;

  background-color: white;
`;
export const Logo = styled.div`
  width: 10%;
  height: 100%;

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
