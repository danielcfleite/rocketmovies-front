import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/ButtonText";
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>
        <Input placeholder="Nome Completo" type="text" icon={FiUser} />
        <Input placeholder="email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Cadastrar"></Button>
        <a href="#">
          {" "}
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Form>
    </Container>
  );
}
