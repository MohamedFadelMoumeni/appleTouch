import React from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const SortingButton = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickButton = (option) => {
    handleClose();
    alert(option);
  }

    return (
<div>
      <Button startIcon={<ArrowDropDownIcon />} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Sorting Items
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => onClickButton("price")} >Price</MenuItem>
        <MenuItem onClick={() => onClickButton("nme")}>Name</MenuItem>
        
      </Menu>
    </div>

    )
}

export default SortingButton;