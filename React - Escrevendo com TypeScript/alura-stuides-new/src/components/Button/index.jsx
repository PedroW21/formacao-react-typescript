import React from 'react';
import style from "./Button.module.scss";

class Button extends React.Component {
    render()
    {
        return (
            <>
            <button className={style.botao}>
                {this.props.children} 
            </button>
            </>
        )
    }
}
// tive que arterar o tipo do arquivo para JSX pois o parametro "children" estava dando erro
export default Button;
