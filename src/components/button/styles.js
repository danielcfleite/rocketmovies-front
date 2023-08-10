import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  transition: 0.5s;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.02);
    filter: brightness(1.02);
    filter: drop-shadow(-4px 3px 10px rgba(253, 161, 28, 0.15));
  }

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 1rem;
`;
