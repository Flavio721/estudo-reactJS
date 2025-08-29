import { useState } from "react";

function ToDo(){
    const [objetivo, setObjetivo] = useState("")
    const [listaObjetivo, setListaObjetivo] = useState([]);
    const styleBox = {
        backgroundColor: "skyblue",
        height: '200px',
        width: '300px',
        border: '1px solid black',
        borderRadius: '10px'
    }

    function adicionarTarefa(e){
        e.preventDefault();
        setListaObjetivo([...listaObjetivo, objetivo])
        setObjetivo('')
    }
    return(
        <div>
            <form onSubmit={adicionarTarefa}>
                <label htmlFor="iobj">Objetivo da tarefa</label>
                <input type="text" id="iobj" value={objetivo} onChange={(e) => setObjetivo(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </form>
            <div>
                <ul>
                    {listaObjetivo.map((objetivo, index) => (
                        <li key={index}>{objetivo}</li>
                    ))}
                </ul>
            </div>
        </div>
    )   
}

export default ToDo;