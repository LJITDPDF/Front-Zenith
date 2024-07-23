import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FullPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MetadeVerde = styled.div`
  width: 100%;
  height: 50%;
  background: #3B7135;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const MetadeBranco = styled.div`
  width: 100%;
  height: 50%;
  background: #fff;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const Logo = styled.img`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 350px;
`;

const ContainerLogin = styled.div`
  width: 25%;
  height: 400px;
  background-color: #e5e5e5;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  z-index: 2;
  position: relative;
`;

const FormLogin = styled.form`
  width: 90%;
  height: 90%;
  background-color: #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Label = styled.label`
  width: 90%;
  text-align: left;
  font-weight: bold;
`;

const Input = styled.input`
  width: 90%;
  height: 40px;
  border: 0;
  background-color: #d4d4d4;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  margin-bottom: 1.5rem;
  border-radius: 2px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.button`
  width: 40%;
  height: 40px;
  background-color: #3B7135;
  color: #ffffff;
  border: 0px;
  border-radius: 15px;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #3c9c32;
    transition: 0.6s;
  }
`;

const Links = styled(Link)`
  color: #858585;
  text-align: left;
  width: 90%;
  padding: 1px;
`;

const users = [
  {
    "idUsuario": 1,
    "nome": "Pedro",
    "email": "ph.silva@gmail.com",
    "senha": 123,
    "matricula": "12345-0",
    "feriasUtilizadas": 5,
    "dataContratacao": "04/10/2023",
    "turno": "Vespertino",
    "nvAcesso": "Pontista"
  },
  {
    "idUsuario": 2,
    "nome": "Gustavo",
    "email": "gustavo@gmail.com",
    "senha": 1234,
    "matricula": "00000-0",
    "nvAcesso": "Supervisor"
  },
  {
    "idUsuario": 3,
    "nome": "Guilherme",
    "email": "guilherme@gmail.com",
    "senha": 12345,
    "matricula": "00000-1",
    "nvAcesso": "Admin"
  }
];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);

    const user = users.find(user => user.nome == username && user.senha == parseInt(password));
    if (user) {
      console.log("Usuário existe:", user);
      if (user.nvAcesso === "Pontista") {
        navigate("/pontista/home");
      } else if (user.nvAcesso === "Admin") {
        navigate("/admin/home");
      } else if (user.nvAcesso === "Supervisor") {
        navigate("/supervisor/home");
      }

    } else {
      console.log("Usuário ou senha inválidos");
    }
  };

  return (
    <FullPage>
      <MetadeVerde />
      <MetadeBranco />
      {/* <Logo src="Zenith_logo.png" alt="Logo" /> */}
      <ContainerLogin>
        <FormLogin onSubmit={handleSubmit}>
          <Label>Usuário</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            placeholder="Digite seu nome de usuário"
          />
          <Label>Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <Links to="/redefinirsenha">Esqueceu a senha?</Links>
          <br />
          <Button type="submit">
            Entrar
          </Button>
        </FormLogin>
      </ContainerLogin>
    </FullPage>
  );
};

export default Login;
