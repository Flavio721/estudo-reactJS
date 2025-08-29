import { useState } from "react"

function ListaTarefa(){
    const [listaTarefa, setTarefa] = useState([])
    const [objetivo, setObjetivo] = useState("");
    const [statusConcluida, setStatusConcluida] = useState([]);

    const btnStyle = {
        backgroundColor: "red",
        padding: "5px",
        borderRadius: "10px",
        marginLeft: "10px",
        marginTop: "30px"
    }
    const divStyle = {
        marginLeft: "600px",
        border: "1px solid white",
        borderRadius: "10px",
        padding: "10px"
    }
    const inputStyle = {
        marginLeft: "10px",
        marginRight: "10px"
    }
    const btnConcluir = {
        backgroundColor: "green",
        padding: "5px",
        borderRadius: "10px",
        marginLeft: "10px",
        marginTop: "30px"
    }
    function adicionarEvento(e){
        e.preventDefault();
        setTarefa([...listaTarefa, objetivo]);
        setStatusConcluida([...statusConcluida, false]);
        setObjetivo("");
    }
    function removerEvento(indexRemove){
        const novaLista = listaTarefa.filter((_, index) => index !== indexRemove);
        setTarefa(novaLista);
    }
    function tarefaConcluida(index){
        const novaStatus = [...statusConcluida];
        novaStatus[index] = !novaStatus[index];
        setStatusConcluida(novaStatus)
    }

    return(
        <div style={divStyle}>
            <form onSubmit={adicionarEvento}>
                <label htmlFor="iobj">Objetivo</label>
                <input type="text" id="" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} style={inputStyle}/>
                <button type="submit">Enviar</button>
            </form>
            
            <ul>
                    {listaTarefa.map((tarefa, index) => (
                        <li key={index} style={{textDecoration: statusConcluida[index] ? "line-through" : "none"}}>{index + 1} - {tarefa} <button style={btnStyle} onClick={() => removerEvento(index)}>Remover tarefa</button> <button style={btnConcluir} onClick={() => tarefaConcluida(index)}>Concluida</button> </li>
                    ))}
                    
                </ul>
        </div>
    )
}

export default ListaTarefa;