import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import useStyles from './shop_section.styles';


const ShopSection = ({item, history}) => {
    const {imgUrl, name, description, bgImg, reversed, link} = item;
    const classes = useStyles();
    return (
        <Grid className={classes.sectionContainer}  container alignItems="center" justify="center">
            <Grid item xs={12} className={classes.itemContainer} container>
                 <Grid item sm={1} xs={1}/>
                 <Grid item sm={10} xs={12} container alignItems="center">
                    {
                        reversed ? 
                        (
                            <>
                            <Grid item xs={12} sm={6} className={classes.imgGrid}>
                            <img className={classes.imgSection} src={imgUrl} alt={`${name}`}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h2" style={{color: 'rgb(252, 206, 13)', textAlign: 'left', fontWeight:'bold'}}>{name}</Typography>
                            <Typography variant="subtitle1" style={{color: '#fff', margin : '1em 0',  textAlign: 'left',  maxWidth: '500px'}}>{description}</Typography>
                            <Button variant="outlined" style={{color: '#fff', background:'rgb(3, 239, 98)'}} onClick={() => history.push(`${link}`)}>Buy Now</Button>
                        </Grid>
                            </>
                        ) : 
                        (
                            <>
                            <Grid item xs={12} sm={6}>
                         <Typography variant="h2" style={{color: 'rgb(252, 206, 13)', fontWeight:'bold'}}>{name}</Typography>
                         <Typography variant="subtitle1" style={{color: '#fff', margin : '1em 0', maxWidth: '500px'}}>{description}</Typography>
                         <Button variant="outlined" style={{color: '#fff', background:'rgb(3, 239, 98)'}} onClick={() => history.push(`${link}`)}>Buy Now</Button>
                     </Grid>
                     <Grid item xs={12} sm={6} className={classes.imgGridSecond}>
                     <img className={classes.imgSection} src={imgUrl} alt={`${name}`}/>

                     </Grid>
                            </>

                        )
                    }
                     
                    

                 </Grid>
                 <Grid item sm={1} xs={1}/>

            </Grid>

        </Grid>

    )
}

export default withRouter(ShopSection);