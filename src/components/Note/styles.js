import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: rgba(255, 133, 155, 0.05);
  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > p {
    text-align: justify;
    color: #999591;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > h1 {
    font-family: "Roboto Slab", serif;
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  .stars {
    margin-top: 8px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ff859b;
  }
`;
