import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 64px 123px;

    a {
      font-size: 20px;
      color: #ff859b;
      display: flex;
      gap: 10px;
      margin-bottom: 24px;
    }

    .stars {
      margin-top: 8px;
      width: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ff859b;
    }

    .title {
      display: flex;
      gap: 19px;
      margin-bottom: 24px;
    }
    .author {
      margin-bottom: 40px;

      > span {
        font-size: 16px;
        margin-right: 20px;
        > svg {
          color: #ff859b;
          margin-right: 8px;
        }
      }

      > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
  }

  > button:first-child {
    align-self: end;
  }

  > button:last-child {
    margin-top: 3rem;
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
  }

  > p {
    font-size: 16px;
    margin-top: 1rem;
    text-align: justify;
  }
`;
