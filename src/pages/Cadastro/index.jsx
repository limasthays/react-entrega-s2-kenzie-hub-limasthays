import { useHistory } from "react-router-dom";
import { Container } from "../../components/Container/styles";
import { Content } from "../../components/Content/container";

import FormCadastro from "../../components/Form-cadastro/form-cadastro";
import Header from "../../components/Header";

function Cadastro() {
  const history = useHistory();

  return (
    <Container>
      <Header onClick={() => history.push("/")} buttonTitle="Voltar" />
      <Content>
        <h3>Crie sua conta</h3>
        <p>Rapido e grátis, vamos nessa!</p>
        <FormCadastro />
      </Content>
    </Container>
  );
}
export default Cadastro;
