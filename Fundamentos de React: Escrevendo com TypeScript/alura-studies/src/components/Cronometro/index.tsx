import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";

export default function Cronometro() {

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inice o cronômetro</p>
      <div className={style.relogioWrapper}>
    <Relogio />
      </div>

      <Botao>
          Começar
      </Botao>
    </div>

  );
}