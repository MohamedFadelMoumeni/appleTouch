import React from 'react';



const Button = ({value, className, url, handleClick, cartBtn, disabled }) => {
    
    return(
        <input className={className} type="button" value={value} onClick={() => cartBtn? handleClick():  handleClick(url)} disabled={disabled}/>
    )
}

export default Button; 