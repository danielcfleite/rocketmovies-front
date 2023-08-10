import { styled } from "styled-components";
import backgroundimg from "../../assets/backgroundimg.png";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > h2 {
    font-size: 24px;
    margin: 20px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  a {
    font-size: 16zpx;
    color: #ff859b;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) center center;
  background-size: cover;
`;
