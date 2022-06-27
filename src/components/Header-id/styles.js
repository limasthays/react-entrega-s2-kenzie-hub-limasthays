import styled from "styled-components";

export const HeaderDivId = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 22px;

  padding: 40px 12px;

  border-top: 1px solid var(--Grey-3);
  border-bottom: 1px solid var(--Grey-3);

  h2 {
    color: var(--Grey-0);
    font-size: 18px;
  }

  p {
    color: var(--Grey-1);
    font-size: 12px;
  }
`;
