import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../Button/button";
import { StyledForm } from "./styles";

import { api } from "../../api/api.js";
import { toast } from "react-toastify";

import { useHistory } from "react-router-dom";

function FormLogin({ authenticated, setAuthenticated }) {
  const formSchemaLogin = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha inválida"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaLogin) });

  const handleResponse = (response) => {
    const { token } = response.data;
    localStorage.setItem("TOKEN@KENZIE_HUB", JSON.stringify(token));
    setAuthenticated(true);
    history.push("/dashboard");

    const { id } = response.data.user;
    localStorage.setItem("ID@KENZIE_HUB", JSON.stringify(id));
  };

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        handleResponse(response);
        toast.success("Login feito com sucesso! :)");
      })
      .catch((error) => console.log(error));
  };

  /*if (authenticated) {
    history.push("/dashboard");
  }*/

  return (
    <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
      <label>
        Email <span>{errors.email && errors.email.message}</span>
      </label>
      <input type="text" {...register("email")} />

      <label>
        Senha <span>{errors.password && errors.password.message}</span>
      </label>
      <input type="password" {...register("password")} />

      <Button type="submit" color="#FF577F">
        Entrar
      </Button>
    </StyledForm>
  );
}

export default FormLogin;
