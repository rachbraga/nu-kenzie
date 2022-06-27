import styled from "styled-components";

export const Container = styled.li`
  width: 270px;
  height: 45px;
  padding: 0px 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background-color: var(--black);

  :hover {
    border: 1px solid var(--lightgrey);
  }

  p {
    font-size: 12px;
    color: var(--lightgrey);
    font-weight: 400;
  }

  @media (min-width: 1010px) {
    width: 850px;
  }
  @media (min-width: 1100px) {
    width: 950px;
  }
  button {
    width: 30px;
    height: 30px;
    margin: 0;
    border: none;
    color: var(--pink);
    background-color: var(--darkgrey);
    margin: 5px;
    :hover {
      cursor: pointer;
      border: 1px solid var(--pink);
    }
  }
`;
export const DataDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  h4 {
    width: 150px;
    font-size: 12px;
  }
  p {
    font-size: 10px;
  }
  > div {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: right;
    align-items: center;
    margin-left: 10px;
  }
`;
export const ButtonsDiv = styled.div`
  width: 100px;
  display: flex;
  justify-content: right;
  align-items: center;
  h4 {
    width: 80px;
  }
  > div {
    width: 100px;
    justify-content: left;
  }
`;
