import React from 'react';
import {Typography} from '@material-ui/core';
import './card-item.styles.css';
import ModalComponent from '../Modal/Modal.component';


const CardComponent = ({item}) => {
  const {imgUrl, name, price} = item;
  const [state, setState] = React.useState({openModal : false});
  const {openModal} = state;
  const handleOpen = () => {
    setState({...state, openModal:true});
  };

  const handleClose = () => {
    setState({...state, openModal:false});
  };
  return(
       <>
       <div className="card" onClick={handleOpen}>
         <img src={imgUrl} alt=""/>
         <div className="details">
           <p>{name}</p>
           <p>{`${price}$`}</p>

         </div>

       </div>
       <ModalComponent item={item} handleClose={handleClose} handleOpen={handleOpen} state={state}/>
       </>
  )
}

export default React.memo(CardComponent);