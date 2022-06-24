import { Button } from "../../components/Button/button";
import { Container } from "../../components/Container/styles";
import { Content } from "../../components/Content/container";
import { StyledForm } from "../../components/Form-login/styles";

function Cadastro() {
  return (
    <Container>
      <Content>
        <h3>Crie sua conta</h3>
        <p>Rapido e grátis, vamos nessa!</p>
        <StyledForm>
          <label>Nome</label>
          <input placeholder="Digite aqui seu nome" />

          <label>Email</label>
          <input placeholder="Digite aqui seu email" />

          <label>Senha</label>
          <input type="password" placeholder="Digite aqui sua senha" />

          <label>Confirmar senha</label>
          <input
            type="password"
            placeholder="Digite aqui sua senha para confirmação"
          />

          <label>Bio</label>
          <input placeholder="Escreva um pouco sobre você" />

          <label>Contato</label>
          <input type="text" placeholder="Opção de contato" />

          <label>Selecionar módulo</label>
          <select>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <Button type="submit" color="var(--Color-primary)">
            Cadastrar
          </Button>
        </StyledForm>
      </Content>
    </Container>
  );
}
export default Cadastro;
