import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => (props.pinkSchema ? "#FF427F" : "#868E96")};
  color: var(--black);
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--pink);
  margin-top: 16px;
  width: 100%;

  :hover {
    border: 2px solid var(--white);
  }
`;
