import MiniButton from "../Mini-button";
import TopHeader from "./header";

function Header({ logoff }) {
  return (
    <TopHeader>
      <h1>Kenzie Hub</h1>
      <MiniButton onClick={() => logoff()}>Sair</MiniButton>
    </TopHeader>
  );
}

export default Header;
