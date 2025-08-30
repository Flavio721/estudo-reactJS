function Card(props) {
  return (
    <div>
      <h2>Suas informações</h2>
      <p>Nome: {props.nome}</p>
      <p>Email: {props.email}</p>
      <p>Avatar: {props.avatar}</p>
    </div>
  );
}

export default Card;
