import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 64px;
  text-align: center;

  > li {
    margin-bottom: 24px;
  }
`;
export const Search = styled.div`
  grid-area: search;
  padding: 40px 30px;
`;
export const Content = styled.div`
  grid-area: content;
  padding: 0 123px;
  overflow-y: auto;
`;
export const NewNote = styled.button`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  }
`;
