import React from 'react';



const Button = ({value, className, url, handleClick, cartBtn}) => {
    
    return(
        <input className={className} type="button" value={value} onClick={() => cartBtn? handleClick():  handleClick(url)  }/>
    )
}

export default Button; 