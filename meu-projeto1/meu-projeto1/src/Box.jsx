import { useState } from "react";

function Box(){
    const [cor, setCor] = useState("blue")
    const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: cor,
    marginBottom: "10px",
    border: "2px solid black"
  };
    return(
        <div>
            <div style={boxStyle}>
                <button onClick={() => setCor('red')}>
                    Clique aqui
                </button>
                <button onClick={() => setCor('blue')}>
                        Voltar para azul
                </button>
            </div>
        </div>
    );
}

export default Box