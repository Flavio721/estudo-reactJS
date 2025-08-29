function Card(props) {
  const divStyle = {
    marginLeft: "600px",
    border: "1px solid white",
    borderRadius: "10px",
    padding: "10px",
  };
  return (
    <div style={divStyle}>
      <h2>Assunto: </h2>
      <p>{props.assunto}</p>
      <h2>Mensagem: </h2>
      <p>{props.mensagem}</p>
    </div>
  );
}

export default Card;
