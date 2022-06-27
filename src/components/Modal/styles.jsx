import styled from "styled-components";

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;

  background-color: var(--Grey-3);

  width: 296px;
  border-radius: 3.23px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 3.23px;

    padding: 10px;

    background-color: var(--Grey-2);
    h3 {
      color: var(--Grey-0);
      font-size: 12px;
    }
  }

  form {
    padding: 16px;
  }
`;

export default StyledModal;
