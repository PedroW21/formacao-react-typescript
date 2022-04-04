import React, { useState } from "react";
import style from './lista.module.scss';
import Item from "./Item";

function Lista() {

  const [tarefas, setTarefas] = useState([
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
        tarefa: "TypeScript",
        tempo: "04:00:00",
    }
  ]);

  return (
    <aside className={style.listaTarefas}>

      <h2 onClick={() => {
        setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00"}])}}>Estudos do dia</h2>

      <ul>
       {tarefas.map((item: JSX.IntrinsicAttributes & { tarefa: string; tempo: string; }, index: React.Key | null | undefined) => (
         <Item 
         key={index}
         {...item}         
         />
       ))}
      </ul>
    </aside>
  );
}

export default Lista;
