import React from 'react';
import {Typography} from '@material-ui/core';
import useStyle from './Image_head.styles';
const ImageHead = ({item}) => {
    const {imgUrl, title, price} = item;
    const classes = useStyle();
    return(
        <div className={classes.itemHead}>
          <img className={classes.img} src={imgUrl} alt={`${title}`}/>
           <div className={classes.itemDetails}>
               <Typography variant="h3">{title}</Typography>
               <Typography variant="h5" className={classes.price}>{` From ${price}.00$`}</Typography>
           </div>
        </div>
    )
}

export default ImageHead;