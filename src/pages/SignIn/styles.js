import { styled } from "styled-components";
import backgroundimg from "../../assets/backgroundimg.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Form = styled.form`
  padding: 0px 100px;
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
    margin: 48px 0;
    align-self: baseline;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 10px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundimg}) center center;
  background-size: cover;
`;
