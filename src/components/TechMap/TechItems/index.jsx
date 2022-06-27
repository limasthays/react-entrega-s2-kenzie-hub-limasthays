import Item from "./style";

function Items() {
  return (
    <Item>
      {[1, 2, 3].map((card, index) => (
        <li key={index}>
          <span>nome da tech</span>
          <span>nivel</span>
          <button>X</button>
        </li>
      ))}
    </Item>
  );
}

export default Items;
