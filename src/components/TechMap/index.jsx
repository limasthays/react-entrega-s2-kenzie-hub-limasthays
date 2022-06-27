import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { Content } from "../Content/container";
import Item from "./TechItems/style";
import { FaTrashAlt } from "react-icons/fa";

function TechMap({ user, loading }) {
  /**
   * o que falta:
   * conseguir deletar os itens
   * deixar a lista reativa
   * deixar o modal no meio da tela
   */
  const { techs } = !loading && user;

  const deleteTech = (id) => {
    api
      .delete(`users/techs/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <Content>
      <Item>
        {techs?.map((tech) => (
          <li key={tech.id}>
            <span>{tech.title}</span>
            <span>{tech.status}</span>

            <button onClick={() => deleteTech(tech.id)}>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </Item>
    </Content>
  );
}

export default TechMap;
