import styled from "styled-components";

export const Container = styled.header`
  height: 200px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #3e3b47;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 123px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.5rem;
  }
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  > img {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* margin-left: 16px; */
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-right: 1rem;
    }

    strong {
      font-size: 14px;
      color: $white;
      margin-right: 1rem;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Search = styled.div`
  width: 50%;
  height: 50px;
  /* margin: 10px 0; */
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  /* margin-bottom: 8px; */
  border-radius: 10px;

  > input {
    height: 80%;
    width: 100%;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
