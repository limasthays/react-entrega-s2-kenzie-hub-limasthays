import MiniButton from "../Mini-button";
import DivTechs from "./styles";

function DivTecnologias({ user, loading, handleModal }) {
  return (
    <DivTechs>
      <div>
        <h2>Tecnologias</h2>
        <MiniButton onClick={() => handleModal()}>+</MiniButton>
      </div>
    </DivTechs>
  );
}

export default DivTecnologias;
