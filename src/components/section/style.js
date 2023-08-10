import { styled } from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;

    color: #ffffff;
    font-size: 32px;
    font-weight: 400;
  }

  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    > Button {
      width: 200px;
    }
  }
`;
