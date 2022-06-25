import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 17.65px;

  label {
    color: var(--Grey-0);
    font-size: 12px;
    display: inline;
    span {
      margin-left: 10px;
      color: var(--Color-primary);
      display: inline;
    }
  }

  input {
    height: 40px;
    background-color: var(--Grey-2);
    border: none;
    border-radius: 3.2px;
    padding: 13px;
  }

  select {
    background-color: var(--Grey-2);
    border: none;
    height: 40px;
    border-radius: 3.2px;
    color: var(--Grey-0);
    padding: 13px;
  }
`;
