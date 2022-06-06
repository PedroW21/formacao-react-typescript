import {useState} from 'react';
import style from "./App.module.scss";
import Form from '../components/Form';
import List from '../components/List';
import Cronometro from "../components/Cronometro";
import { ITarefa } from '../types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
