import { useEffect, useState } from "react";

function ListaToDo(){
    const [listaTarefa, setTarefa] = useState([]);
    const [objetivo, setObjetivo] = useState("");
    const [statusConcluida, setStatusConcluida] = useState([]);
    const [contadorTarefa, setContador] = useState(0)
    const [contadorTarefaConcluida, setConcluida] = useState(0);
    const [mensagem, setMensagem] = useState("");
    const [mensagemConcluida, setMensagemConcluida] = useState("");

    useEffect(() => {
        setMensagem(`Você tem ${contadorTarefa} tarefas pendentes`);
    }, [contadorTarefa])

    useEffect(() => {
        setMensagemConcluida(`Você já concluiu ${contadorTarefaConcluida} tarefas`);
    })
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

    function adicionarTarefa(e){
        e.preventDefault();
        setTarefa([...listaTarefa, objetivo]);
        setStatusConcluida([...statusConcluida, false]);
        setContador(contadorTarefa + 1);
        setObjetivo("");
    }

    function removerTarefa(indexRemove){
        const novaLista = listaTarefa.filter((_, index) => index !== indexRemove);
        setTarefa(novaLista);
        setContador(contadorTarefa - 1);
    }

    function removerTudo(){
        const novaLista2 = []
        setTarefa(novaLista2)
        setContador(0);
        setConcluida(0);
    }
    function concluirTarefa(index) {
        const novaStatus = [...statusConcluida];
        novaStatus[index] = !novaStatus[index];
        setStatusConcluida(novaStatus);
        setConcluida(contadorTarefaConcluida + 1)
        setContador(contadorTarefa - 1);
    }

    return(
        <div style={divStyle}>
            <form onSubmit={adicionarTarefa}>
                <label htmlFor="iobj">Objetivo</label>
                <input type="text" id="iobj" value={objetivo} onChange={(e) => setObjetivo(e.target.value)} style={inputStyle} />
                <button type="submit">Enviar</button>
            </form>
                <ul>
                    {listaTarefa.map((tarefa, index) => (
                        <li key={index} style={{textDecoration: statusConcluida[index] ? "line-through" : "none"}}>{index + 1} - {tarefa} <button style={btnStyle} onClick={() => removerTarefa(index)}>Remover tarefa</button> <button style={btnConcluir} onClick={() => concluirTarefa(index)}>Concluida</button> </li>
                    ))}
                    <button style={btnStyle} onClick={(e) => removerTudo()}>Remover todas tarefas</button>
                    <p>{mensagem}</p>
                    <p>{mensagemConcluida}</p>
                </ul>
        </div>
    )
}

export default ListaToDo;