import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonIcon from '@material-ui/icons/Person';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ContactlessIcon from '@material-ui/icons/Contactless';
import DrawerComponent from '../Drawer/Drawer.component';
import useStyles from './Header.styles';
import {selectShopData} from '../../redux/shop_data/shop_data.selectors';

import {connect} from 'react-redux';

import {selectTotalItems} from '../../redux/cartitems/cartitems.selectors';


const Header = ({history, collections, totalItem}) => {
    const [responsive , setResponsive] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const setResponsiveDesign = () => {
    window.innerWidth < 900 ? setResponsive(true) : setResponsive(false);
  }
  const handleCartCloser = () => {
    setCartOpen(false);
  }
  const desktopDesign = () => {
   return (
      <>
       <Button style={{color: "#fff", marginRight:'2em'}} onClick={() => history.push('/')}>
    Home
  </Button>
  <Button startIcon={<ExpandMoreIcon />} style={{color: "#fff", marginRight:'2em'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
  categories
</Button>
<Menu
id="simple-menu"
anchorEl={anchorEl}
keepMounted
open={Boolean(anchorEl)}
onClose={handleClose}
>
<MenuItem onClick={() => {handleClose(); history.push('/shop')}}>Shop</MenuItem>
{
  collections ? 
  (
    collections.map(collection => (
      <MenuItem key={collection.id} onClick={() => {handleClose(); history.push(`${collection.link}`)}}>{collection.name}</MenuItem>
  
    ))
  ) : null
}
</Menu>
  <IconButton onClick={() => setCartOpen(!cartOpen)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
  <Badge badgeContent={totalItem} color="primary">
  <LocalMallIcon />
</Badge>
    
  </IconButton>
  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    <PersonIcon />
  </IconButton>
      </>
        
   )
  }
  
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }
  const mobileDesign = () => {
    return ( 
      <IconButton onClick={() => setDrawerOpen(!drawerOpen)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>

    )
  }
   useEffect(() => {
    setResponsiveDesign();
   }, []);
   window.addEventListener('resize', setResponsiveDesign);
    return(
        <div className={classes.root}>
        <AppBar position="static" className={classes.header}> 
          <Toolbar>
            {
              responsive ? 
              mobileDesign() : null
            }
            <DrawerComponent openState={drawerOpen} classname={classes.drawer}  handleClose={handleDrawerClose} leftSide>
             {desktopDesign()}
            </DrawerComponent>
            <DrawerComponent openState={cartOpen} classname={classes.cart}  handleClose={handleCartCloser} cart>
      {desktopDesign()}
     </DrawerComponent>
            <Typography variant="h6" className={classes.title}>
              <Button  startIcon={<ContactlessIcon />} style={{color: '#fff', fontSize: '1.2em'}} onClick={() => history.push('/')}>
              earTouch.
              </Button>
            </Typography>
            {
              responsive ? null : desktopDesign()
            }
            
          </Toolbar>
        </AppBar>
      </div>
    )
}

const mapStateToProps = state => ({
  collections: selectShopData(state),
  totalItem : selectTotalItems(state)
})
export default connect(mapStateToProps)(withRouter(Header));