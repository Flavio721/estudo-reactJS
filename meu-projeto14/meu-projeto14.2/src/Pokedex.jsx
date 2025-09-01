import { useState, useEffect } from "react"; // Importação dos States
function Pokedex() {
  // Variaveis necessárias para melhor funcionamento do projeto
  const [pokemon, setPokemon] = useState([]);
  const [quantidade, setQuantidade] = useState(20);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  // Código para a consulta na API
  useEffect(() => {
    // Coloca que está carregando (opcional)
    setLoading(true);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${quantidade}`) // Consulta na API com o valor desejado (20 nesse caso)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro na consulta dos dados"); // Se a resposta não for "ok" lança uma mensagem de erro
        }
        return res.json(); // Retorna os dados em formato json
      })
      .then((dados) => {
        setPokemon(dados.results); // Adiciona os resultados para a lista criada
        setLoading(false); // Desliga o carregar
      })
      .catch((err) => {
        setLoading(false); // Desliga o carregar
        setErro(err.message); // Preenche o null com a mensagem de erro
      });
  }, [quantidade]);
  if (loading) {
    return <p>Carregando os dados...</p>; // Se o loading estiver com valor true
  }
  if (erro) {
    return <p>Erro: {erro}</p>; // Se der erro, exibe a mensagem de erro
  }
  // Retorno esperado
  return (
    <div>
      <h2>Pokedéx</h2>
      <ul>
        {pokemon.map((dados) => (
          <li key={dados.url}>{dados.name}</li> // Sempre colocar a key com a chave única do objeto retornado da API
        ))}
      </ul>
    </div>
  );
}
export default Pokedex;
