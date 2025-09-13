function Card(props) {
  const boxStyle = {
    backgroundColor: `${props.cor}`,
  };
  return (
    <div style={boxStyle}>
      <h2>{props.titulo}</h2>
      <p>{props.descricao}</p>
    </div>
  );
}
export default Card;
