import { useState } from "react";

function GeradorCitacoes(){
    const [citacao, setCitacao] = useState("Gere citações aleatórias");
    const [citador, setCitador] = useState("")
    const arrayCitacoes = ["Penso logo existo", "Amar como Jesus amou", "Amor de Scorcese"];
    const arrayCriadores = ["Platão", "Cantor católico", "Xamã"];

    const boxStyle = {
        border: "1px solid white",
        borderRadius: "10px",
        textAlign: "center",
        marginLeft: "600px",
        padding: "10px"
    }

    function indiceAleatorio(){
        const indexAleatorio = Math.floor(Math.random() * arrayCitacoes.length);
        setCitacao(arrayCitacoes[indexAleatorio]);
        setCitador(arrayCriadores[indexAleatorio]);
    }

    return(
        <div style={boxStyle}>
            <p>{citacao}</p>
            <p>{citador}</p>
            <button onClick={indiceAleatorio}>Sortear nova citação</button>
        </div>
    )
}

export default GeradorCitacoes;