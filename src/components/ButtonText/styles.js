import { styled } from "styled-components";

export const Container = styled.button`
  background: none;
  color: ${({ theme, ...rest }) => theme.COLORS.ORANGE};
  border: none;
  font-size: 16px;
`;
