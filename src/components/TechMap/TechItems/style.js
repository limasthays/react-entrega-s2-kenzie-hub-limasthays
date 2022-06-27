import styled from "styled-components";

const Item = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--Grey-4);
    height: 48px;
    border-radius: 4px;
    padding: 14px;

    span {
      color: var(--Grey-0);
      font-weight: bold;
      font-size: 14px;
    }

    span + span {
      color: var(--Grey-1);
      font-weight: 500;
      font-size: 12px;
    }
  }
`;

export default Item;
