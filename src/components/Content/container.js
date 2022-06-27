import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;

  width: 296px;
  padding: 33.96px 17.65px;
  border-radius: 4px;

  background-color: var(--Grey-3);

  p {
    align-self: center;
    color: var(--Grey-1);
    font-size: 9.6px;
  }

  h3 {
    color: var(--Grey-0);
    align-self: center;
    font-size: 14.3px;
  }
`;
