import { useState } from "react";
import { api } from "../../api/api";
import { Content } from "../Content/container";
import Item from "./TechItems/style";

function TechMap({ user, loading }) {
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
            <button onClick={() => deleteTech(tech.id)}>X</button>
          </li>
        ))}
      </Item>
    </Content>
  );
}

export default TechMap;
