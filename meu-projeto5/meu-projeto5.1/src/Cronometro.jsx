import { useState, useEffect } from "react";

function Cronometro(){
    const [segundos, setSegundos] = useState(0);
    const [rodando, setRodando] = useState(false);

    const btnParar = {
        backgroundColor: "red",
        padding: "5px",
        borderRadius: "10px",
        color: "white",
        marginRight: "10px"
    };
    const btnRetomar = {
        backgroundColor: "green",
        padding: "5px",
        borderRadius: "10px",
        color: "white",
        marginRight: "10px"
    };
    const btnZerar = {
        backgroundColor: "gray",
        padding: "5px",
        borderRadius: "10px",
        color: "black",
        marginRight: "10px"
    };
    const boxStyle = {
        border: "1px solid white",
        borderRadius: "10px",
        textAlign: "center",
        marginLeft: "600px",
        padding: "20px"
    }

    useEffect(() => {
        if (rodando) {
            const timer = setInterval(() => {
                setSegundos(s => s + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        }, [rodando]);


    function cronometroParado(){
        setRodando(false);
    }
    function cronometroRodando(){
        setRodando(true);
    }
    function zerarCronometro(){
        setSegundos(0);
        setRodando(false);
    }
    return(
        <div style={boxStyle}>
            <h2>Cronômetro</h2>
            <p>{segundos}s</p>
            <button onClick={cronometroParado} style={btnParar}>Pausar</button>
            <button onClick={cronometroRodando} style={btnRetomar}>Começar</button>
            <button onClick={zerarCronometro} style={btnZerar}>Zerar</button>
        </div>
    )
}

export default Cronometro;