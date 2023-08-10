import { RiShutDownLine } from "react-icons/ri";
import { Input } from "../Input";

import { Container, Profile, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <input type="text" placeholder="Pesquisar pelo título" />
      </Search>
      <Profile>
        <div>
          <strong>Daniel Carvalho</strong>
          <span>sair</span>
        </div>
        <img
          src="https://github.com/danielcfleite.png"
          alt="Foto do usuário"
        ></img>
      </Profile>
    </Container>
  );
}
