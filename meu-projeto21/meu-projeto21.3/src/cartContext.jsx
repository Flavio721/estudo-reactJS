import { useContext, createContext, useState } from "react";

const cartContext = createContext();
export const cartUser = () => useContext(cartContext);

function Cart({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionar(produto) {
    setCarrinho([...carrinho, produto]);
  }
  function remover(produto) {
    const novaLista = carrinho.filter(
      (_, produtoCerto) => produtoCerto !== produto
    );
    setCarrinho(novaLista);
  }

  return (
    <cartContext.Provider value={{ carrinho, adicionar, remover }}>
      {children}
    </cartContext.Provider>
  );
}
export default Cart;
