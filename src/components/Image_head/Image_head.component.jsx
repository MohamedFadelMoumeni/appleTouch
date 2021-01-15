import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

const useStyle = makeStyles({
   itemHead:{
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    height: '100%',
    width:'100%'
   },
   itemDetails : {
       color: '#fff',
       flex: ".5",
       textAlign:'center'
   },
   img :{
       width: '50%',
       flex: '.5',
   },
   price :{
       textAlign : 'center'

   }
})
const ImageHead = ({imgUrl, title, price}) => {
    const classes = useStyle();
    return(
        <div className={classes.itemHead}>
          <img className={classes.img} src={imgUrl} alt=""/>
           <div className={classes.itemDetails}>
               <Typography variant="h3">{title}</Typography>
               <Typography variant="h5" className={classes.price}>{`${price}.00$`}</Typography>
           </div>
        </div>
    )
}

export default ImageHead;