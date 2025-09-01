import { useState, useEffect } from "react";

function Blog() {
  const [listaPost, setPost] = useState([]);
  const [quantidade, setQuantidade] = useState(10);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao consultar os posts");
        }
        return res.json();
      })
      .then((dados) => {
        setPost(dados);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErro(err.message);
      });
  }, []);

  if (loading) {
    return <p>Carregando os posts...</p>;
  }
  if (erro) {
    return <p>Erro: {erro}</p>;
  }
  return (
    <div>
      <h2>Posts do blog</h2>
      <ul>
        {listaPost.slice(0, quantidade).map((posts) => (
          <li key={posts.id}>
            <strong>{posts.title}</strong> <br />
            {posts.body} <hr />
          </li>
        ))}
      </ul>
      <button onClick={() => setQuantidade(quantidade + 10)}>
        Carregar mais
      </button>
    </div>
  );
}
export default Blog;
