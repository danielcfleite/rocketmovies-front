import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { ButtonText } from "../../components/ButtonText";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>
        <Input placeholder="email" type="text" icon={FiMail} />
        <Input placeholder="Senha" type="password" icon={FiLock} />
        <Button title="Entrar"></Button>
        <a href="#">Criar conta</a>
      </Form>
      <Background />
    </Container>
  );
}
