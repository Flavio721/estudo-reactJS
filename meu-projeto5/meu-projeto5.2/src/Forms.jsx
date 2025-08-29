import { useState, useEffect } from "react";

function Forms(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [status, setStatus] = useState("");
    const [contador, setContador] = useState(0);

    useEffect(() => {
        if(!nome || !email || !senha){
            setStatus("Preencha todos os campos");
        } else {
            setStatus("Tudo certo!");
        }
    }, [contador]);

    function formsPronto(e){
        e.preventDefault();
        setContador(contador + 1);
    }

    return(
        <div>
            <form onSubmit={formsPronto}>
                <label htmlFor="inome">Nome</label>
                <input type="text" id="inome" value={nome} onChange={(e) => setNome(e.target.value)} />

                <label htmlFor="iemail">Email</label>
                <input type="email" id="iemail" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="isenha">Senha</label>
                <input type="password" id="isenha" value={senha} onChange={(e) => setSenha(e.target.value)} />

                <button type="submit">Enviar</button>
            </form>

            <p>{status}</p>
        </div>
    );
}

export default Forms;
