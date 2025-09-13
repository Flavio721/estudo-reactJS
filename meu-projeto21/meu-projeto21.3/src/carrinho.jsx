import { cartUser } from "./cartContext";

function Carrinho() {
  const { carrinho, remover } = cartUser();

  return (
    <div>
      <ul>
        {carrinho.map((produto, index) => (
          <li key={index}>
            {index + 1} - {produto}
            <button onClick={() => remover(index)}>Remover produto</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Carrinho;
