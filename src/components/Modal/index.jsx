import { Button } from "../Button/button";
import { StyledForm } from "../Form-login/styles";
import MiniButton from "../Mini-button";
import StyledModal from "./styles";
import { useForm } from "react-hook-form";
//import { api } from "../../api/api";

function Modal({ handleModal }) {
  const { register, handleSubmit } = useForm();

  const handleDados = (data) => {
    const token = JSON.parse(localStorage.getItem("TOKEN@KENZIE_HUB"));
    //api.post()
    console.log(token);
    console.log(data);
  };

  return (
    <StyledModal>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <MiniButton
          onClick={() => {
            handleModal();
          }}
        >
          X
        </MiniButton>
      </div>

      <StyledForm onSubmit={handleSubmit(handleDados)}>
        <label>Tecnologia</label>
        <input type="text" {...register("title")} />

        <label>Selecionar status</label>
        <select {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <Button type="submit" color="var(--Color-primary)">
          Cadastrar Tecnologia
        </Button>
      </StyledForm>
    </StyledModal>
  );
}

export default Modal;
