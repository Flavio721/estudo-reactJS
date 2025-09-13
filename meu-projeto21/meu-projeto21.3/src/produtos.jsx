import { cartUser } from "./cartContext";

function Produtos() {
  const { adicionar } = cartUser();

  return (
    <div>
      <div>
        <h2>Produto 1</h2>
        <button onClick={() => adicionar("Produto 1")}>
          Adicionar produto no carrinho
        </button>
      </div>
      <div>
        <h2>Produto 2</h2>
        <button onClick={() => adicionar("Produto 2")}>
          Adicionar produto no carrinho
        </button>
      </div>
      <div>
        <h2>Produto 3</h2>
        <button onClick={() => adicionar("Produto 3")}>
          Adicionar produto no carrinho
        </button>
      </div>
    </div>
  );
}
export default Produtos;
