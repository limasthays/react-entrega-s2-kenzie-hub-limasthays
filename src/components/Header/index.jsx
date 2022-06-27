import MiniButton from "../Mini-button";
import TopHeader from "./header";

function Header({ onClick, buttonTitle }) {
  return (
    <TopHeader>
      <h1>Kenzie Hub</h1>
      <MiniButton onClick={onClick}>{buttonTitle}</MiniButton>
    </TopHeader>
  );
}

export default Header;
