import Cart from "./cartContext";
import Carrinho from "./carrinho";
import Produtos from "./produtos";

function App() {
  return (
    <Cart>
      <div>
        <Carrinho />
        <Produtos />
      </div>
    </Cart>
  );
}
export default App;
