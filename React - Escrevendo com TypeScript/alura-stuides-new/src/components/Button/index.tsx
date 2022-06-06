import React from 'react';
import style from "./Button.module.scss";

interface Props
{
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: React.ReactNode
}

function Button({onClick, type, children} : Props)
{
    return (
        <>
        <button className={style.botao} type={type} onClick={onClick} >
            {children} 
        </button>
        </>
    )
}

/*
Class Component

class Button1 extends React.Component {
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
*/
export default Button;
