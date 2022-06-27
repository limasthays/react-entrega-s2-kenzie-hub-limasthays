import { useEffect } from "react";
import { api } from "../../../api/api";
import Item from "./style";

function Items({ user, loading }) {
  const deleteTech = (id) => {
    api
      .delete(`users/techs/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  //console.log(!loading && techs);
  useEffect(() => {
    if (user) {
      const { techs } = user;
      return (
        <Item>
          {techs.map((tech) => (
            <li key={tech.id}>
              <span>{tech.title}</span>
              <span>{tech.status}</span>
              <button>X</button>
            </li>
          ))}
        </Item>
      );
    }
  }, [user]);
}

export default Items;
