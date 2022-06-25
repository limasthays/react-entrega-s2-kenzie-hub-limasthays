import { Container } from "../../components/Container/styles";
import { Content } from "../../components/Content/container";

import FormCadastro from "../../components/Form-cadastro/form-cadastro";

function Cadastro() {
  return (
    <Container>
      <Content>
        <h3>Crie sua conta</h3>
        <p>Rapido e grátis, vamos nessa!</p>
        <FormCadastro />
      </Content>
    </Container>
  );
}
export default Cadastro;
