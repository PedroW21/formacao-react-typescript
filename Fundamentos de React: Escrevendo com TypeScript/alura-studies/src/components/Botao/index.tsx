import React from 'react';
import style from './botao.module.scss';

class Botao extends React.Component {
    render () {
        return (
            <button className={style.botao}>
                Botazinho
            </button>
        )
    }
}

export default Botao;