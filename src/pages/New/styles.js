import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  margin: 38px 123px;

  .wrap {
    display: flex;
    gap: 10px;
  }

  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #0d0c0f;
    padding: 20px;
    border-radius: 7px;
  }
  > header {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 40px;

    h1 {
      font-weight: 400;
      font-size: 36px;
      color: #ffffff;
    }

    a {
      font-size: 20px;
      color: #ff859b;
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
    }
  }
  .buttons {
    display: flex;
    gap: 40px;

    :first-child {
      background-color: #0d0c0f;
      color: #ff859b;
    }
  }
`;
