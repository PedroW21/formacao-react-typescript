import style from "./Relogio.module.scss";

interface Props
{
    tempo: number | undefined
}

export default function Relogio({ tempo = 0 } : Props)
{

    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDez, minutoUn] = String(minutos).padStart(2, "0");
    const [segundoDez, segundoUn] = String(segundos).padStart(2, "0");

    return (
        <>
        <span className={style.relogioNumero}> {minutoDez} </span>
        <span className={style.relogioNumero}> {minutoUn} </span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}> {segundoDez}</span>
        <span className={style.relogioNumero}> {segundoUn} </span>
        </>
    )
}