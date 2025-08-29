import { useState } from "react";

function Input({ aoEnviar }){
    const [mensagem, setMensagem] = useState("");
    

    function lidarComEnvio(e){
        e.preventDefault();
        aoEnviar(mensagem);
        setMensagem('');
    }

    return (
        <form onSubmit={lidarComEnvio}>
            <label htmlFor="inome">Escreva sua mensagem</label>
            <input type="text" id="inome" value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Input;