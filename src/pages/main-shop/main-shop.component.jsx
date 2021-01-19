import React from 'react';
import {Grid , Typography} from '@material-ui/core';
import Button from '../../components/Button/Button.component';
import CardComponent from '../../components/card-item/card-item.component'
import {makeStyles} from '@material-ui/styles';
import {selectShopData} from '../../redux/shop_data/shop_data.selectors';
import Spinner from '../../components/Spinner/Spinner.component';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './main-shop.styles.css';

const useStyles = makeStyles({
    containerDivCategories: {
        width: '100%',
        backgroundColor: '#fff',
        
    },
    titleDiv:{
        textAlign:'center'
    },
    btnDiv: {
      width: '100%',
      display: 'flex',
      alignItems:'center',
      justifyContent:'center'
    }
})

const MainShop = ({collections, history}) => {
    const classes = useStyles();

    const handleClick = (path) => {
        history.push(path);
    }
    
    return (
      collections ? 
      (
        <Grid container className={classes.containerDivCategories}>
        <Grid item xs={12} className={classes.titleDiv}>
          <h2 className="title-shop">SHOP</h2>
        </Grid>
         <div className="btn-element">
             {
                 collections.map(collection => (
                    <Button key={collection.id} className="hello" value={collection.name} url={collection.link} handleClick={handleClick}/>
                 ))
                
             }
              
         </div>
         <div className="shop-container">
         {
                collections.map((item) => (
                    item.items.slice(0, 3).map(item => (
                       
                        <CardComponent key={item.id} item={item} />
                   
                    ))
                ))
            }
         </div>
     </Grid>
      ) : <Spinner />
    )
}

const mapStateToProps = state => ({
    collections : selectShopData(state)
})

export default withRouter(connect(mapStateToProps)(MainShop));