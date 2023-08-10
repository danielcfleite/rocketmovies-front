import { Header } from "../../components/header";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Form } from "./styles";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Novo Filme</h1>
            <a href="/">
              {" "}
              <FiArrowLeft /> <span>voltar</span>
            </a>
          </header>
          <div className="wrap">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <div className="buttons">
            <Button title="Excluir filme" />{" "}
            <Button title="Salvar Alterações" />
          </div>
        </Form>
      </main>
    </Container>
  );
}
