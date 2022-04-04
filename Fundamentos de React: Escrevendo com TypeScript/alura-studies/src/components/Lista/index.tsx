import React from "react";
import { ITarefa } from '../../types/tarefa';
import style from './lista.module.scss';
import Item from "./Item";


function Lista({ tarefas }: {tarefas: Array<ITarefa>}) {

  return (
    <aside className={style.listaTarefas}>

      <h2>Estudos do dia</h2>

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
