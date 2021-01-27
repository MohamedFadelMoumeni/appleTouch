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
import Signin from '../Signin/Signin.component';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListenerComponent from '../ClickAwayListener/ClickAwayListener.component';

import {connect} from 'react-redux';
import {selectTotalItems} from '../../redux/cartitems/cartitems.selectors';
import {selectCurrentUser} from '../../redux/currentUser/currentUser.selectors';
import {signOutStart} from '../../redux/currentUser/currentUser.actions';


const Header = ({history, collections, totalItem, currentUser, signOutStart}) => {
    const [responsive , setResponsive] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openSignModal, setOpenSignModal] = useState(false);
    const [openListener, setOpenListener] = React.useState(false);
    
    const handleClickListener = () => {
      setOpenListener((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpenListener(false);
    };
    const handleOpenSignModal = () =>  {
      setOpenSignModal(true)
    }
    const handleCloseSignModal = () => {
      setOpenSignModal(false);
    }

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
  <Button startIcon={<ExpandMoreIcon />} style={{color: "rgb(3, 239, 98)", marginRight:'2em'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
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
  <Badge badgeContent={totalItem} >
  <LocalMallIcon />
</Badge>
    
  </IconButton>
  {
    currentUser ? 
    (
      <div className={classes.user}>
        <IconButton onClick={() => handleClickListener()}  >
        <Avatar  alt="Remy Sharp" src={`${currentUser.photoURL}`} />
      </IconButton>
      <ClickAwayListenerComponent signOutStart={signOutStart} currentUser={currentUser} handleClickListener={handleClickListener} openListener={openListener} handleClickAway={handleClickAway}/>
      </div>
    )
    : (
      <IconButton onClick={handleOpenSignModal} edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> 
       <PersonIcon />
    </IconButton>
    )
  }
  
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
        <Signin open={openSignModal} handleCloseSignModal={handleCloseSignModal}/>
      </div>
    )
}

const mapStateToProps = state => ({
  collections: selectShopData(state),
  totalItem : selectTotalItems(state),
  currentUser : selectCurrentUser(state)
})
const mapDispatchToProps = dispatch => ({
  signOutStart : () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));