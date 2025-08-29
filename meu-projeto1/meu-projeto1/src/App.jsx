import { use, useState } from 'react';
import Header from './Header'
import Contador from './Contador';
import Box from './Box';
import Tarefa from './Tarefa';
import Mensagem from './Mensagem';
import Input from './Input';
import ToDo from './toDo';
function App() {
  const [titulo, settitulo] = useState("Meu site em React é bom demais");
  const tarefas = ["Estudar React.js, Fazer resumo de química, Estudar para FI"];
  const [texto, setTexto] = useState("");
  const [texto2, setTexto2] = useState("");
  function handleEnviarMensagem(mensagem){
        alert(`Mensagem recebida: ${mensagem}`)
    }

  return (
    <>
      <Header titulo={titulo}/>
        <p>Meu primeiro projeto em React 🎉</p>
      <button onClick={() => settitulo("Titulo alterado")}>
        Mudar titulo
        </button>
      <Contador />
      {/* <Box /> */}
      {/* <ul>
        {tarefas.map((tarefa, index) => 
          (
            <Tarefa key={index} nome={tarefa} />
          ))}
      </ul> */}
      {/* <input type="text" value={texto} id="" onChange={(e) => setTexto(e.target.value)} placeholder='Digite algo'/>
      <Mensagem texto={texto}/> */}
      <div>
        <h2>Chat</h2>
        <Input aoEnviar={handleEnviarMensagem}/>
      </div>
      <ToDo />
    </>
  );
}

export default App;

