import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 38.65px;

  background-color: ${(props) => props.color};
  color: var(--Grey-0);
  border: none;
  border-radius: 3.2px;
`;
