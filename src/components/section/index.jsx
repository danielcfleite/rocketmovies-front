import { Container } from "./style";
import { Button } from "../button";

export function Section({ title, children, buttonTitle, icon }) {
  return (
    <Container>
      <div className="wrap">
        <h2>{title}</h2>
        {buttonTitle ? <Button title={buttonTitle} icon={icon} /> : <span />}
      </div>
      {children}
    </Container>
  );
}
