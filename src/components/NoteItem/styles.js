import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme, isNew }) => theme.COLORS.GRAY_300};
  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "None"};
  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
  }

  .button-delete {
    color: #ff859b;
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
