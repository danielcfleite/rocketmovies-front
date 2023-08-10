import { Container } from "./styles";
import { Tag } from "../tag";
import { RiStarFill, RiStarLine } from "react-icons/ri";

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div class="stars">
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarFill />
        <RiStarLine />
      </div>
      <p>{data.text}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.name} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
