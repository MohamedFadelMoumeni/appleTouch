import React from 'react';
import './pub.styles.css';
import CloseIcon from '@material-ui/icons/Close';

const Pub = ({handleClick}) => (
    <div className="pub" onClick={handleClick}>
      <h3 className="delete"><CloseIcon /></h3>
    </div>
)

export default Pub;