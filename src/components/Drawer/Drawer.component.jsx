import React from 'react';
import Drawer from '@material-ui/core/Drawer';



const DrawerComponent = ({ children, handleClose, openState, classname, leftSide}) => {
    return (
       <div >
           <Drawer
            
            {...{
              anchor: `${leftSide ? 'left' : 'right'}`,
              open: openState,
              onClose: handleClose,
            }}
          > 
          
            <div className={classname}>
              {children}
            </div>
          
  
          </Drawer>

       </div>
    )
}

export default DrawerComponent;