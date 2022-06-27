import { HeaderDivId } from "./styles";

function HeaderId({ user, loading }) {
  return (
    <HeaderDivId>
      <h2>Olá, {!loading && user.name}</h2>
      <p>{!loading && user.course_module}</p>
    </HeaderDivId>
  );
}

export default HeaderId;
