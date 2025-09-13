import Card from "./Card";
import Botao from "./Botao";
function App() {
  const btnStyle = {
    padding: "10px",
    backgroundColor: "red",
    borderRadius: "10px",
  };
  return (
    <div>
      <Card
        titulo="Conversei com ela hoje"
        descricao="Foi muito legal"
        cor="pink"
      />
      <Botao titulo="Clica aqui" estilo={btnStyle} />
    </div>
  );
}
export default App;
