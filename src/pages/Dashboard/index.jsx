import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import CustomContainer from "../../components/Container/custom-container";
import Header from "../../components/Header";
import HeaderId from "../../components/Header-id";
import Modal from "../../components/Modal";
import DivTecnologias from "../../components/Tecnologias";

function Dashboard({ authenticated, setAuthenticated }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authenticated) {
      const id = localStorage.getItem("ID@KENZIE_HUB");
      const idParse = JSON.parse(id);
      api
        .get(`users/${idParse}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setLoading(false);
        });
    } else {
      return history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  const logoff = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/");
  };

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <CustomContainer>
      <Header logoff={logoff} />
      <HeaderId user={user} loading={loading} />
      <DivTecnologias user={user} loading={loading} handleModal={handleModal} />
      {modal && <Modal handleModal={handleModal} />}
    </CustomContainer>
  );
}

export default Dashboard;
