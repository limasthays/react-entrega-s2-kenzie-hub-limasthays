import MiniButton from "../Mini-button";
import DivTechs from "./styles";

function DivTecnologias({ user, loading }) {
  return (
    <DivTechs>
      <div>
        <h2>Tecnologias</h2>
        <MiniButton>+</MiniButton>
      </div>
    </DivTechs>
  );
}

export default DivTecnologias;
