import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledForm } from "../Form-login/styles";
import { Button } from "../Button/button";
import { api } from "../../api/api";

import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function FormCadastro() {
  const formSchemaCadastro = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha precisa ter no mínimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .required("As senhas precisam ser iguais")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
    bio: yup.string().required("Campo obrigatório").max(140),
    course_module: yup.string().required("Escolha o módulo em que você está"),
    contact: yup.string().required("Campo de contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaCadastro) });

  const history = useHistory();

  const onSubmitCadastrar = ({
    name,
    email,
    password,
    contact,
    bio,
    course_module,
  }) => {
    const newUser = {
      name,
      email,
      password,
      contact,
      bio,
      course_module,
    };
    api
      .post("users", newUser)
      .then((response) =>
        toast.success("Sucesso ao criar a conta! :) Agora vamos fazer o login.")
      )
      .then(() => history.push("/"))
      .catch((err) => {
        console.log(err);
        toast.error("Opa! Algo deu errado. Confira os dados que você digitou.");
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitCadastrar)}>
      <label>
        Nome <span>{errors.name && errors.name.message}</span>
      </label>
      <input placeholder="Digite aqui seu nome" {...register("name")} />

      <label>
        Email <span>{errors.email && errors.email.message}</span>
      </label>
      <input placeholder="Digite aqui seu email" {...register("email")} />

      <label>
        Senha <span>{errors.password && errors.password.message}</span>
      </label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />

      <label>
        Confirmar senha
        <span>{errors.confirmPassword && errors.confirmPassword.message}</span>
      </label>
      <input
        type="password"
        placeholder="Digite aqui sua senha para confirmação"
        {...register("confirmPassword")}
      />

      <label>
        Bio <span>{errors.bio && errors.bio.message}</span>
      </label>
      <input placeholder="Escreva um pouco sobre você" {...register("bio")} />

      <label>
        Contato <span>{errors.contact && errors.contact.message}</span>
      </label>
      <input
        type="text"
        placeholder="Opção de contato"
        {...register("contact")}
      />

      <label>Selecionar módulo</label>
      <select {...register("course_module")}>
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
  );
}

export default FormCadastro;
