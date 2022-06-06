import React from 'react';
import style from "./Button.module.scss";

class Button extends React.Component {
    render()
    {
        const {type = "button", onClick} = this.props;
        
        return (
            <>
            <button className={style.botao} onClick={onClick} >
                {this.props.children} 
            </button>
            </>
        )
    }
}
// tive que arterar o tipo do arquivo para JSX pois o parametro "children" estava dando erro
export default Button;
