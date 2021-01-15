import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
   
   sectionContainer : {
       backgroundPosition : 'center',
       backgroundSize : 'cover',
       backgroundRepeat :'no-repeat',
       backgroundAttachment : 'fixed'
   },
   itemContainer : {
       backgroundColor : 'rgba(0, 0, 0, .5)',
       padding: '2.5em 1em'
   },
   imgSection : {
       width: '90%',
       transition: 'all .8s',
       textAlign :'center',
       cursor: 'pointer',
       '&:hover': {
        transform :'rotate(5deg)'
       }
   },
   imgGrid : {
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
   }
});

const ShopSection = ({item}) => {
    const {imgUrl, name, description, bgImg, reversed} = item;
    const classes = useStyles();
    return (
        <Grid className={classes.sectionContainer} style={{backgroundImage: `url(${bgImg})`}} container alignItems="center" justify="center">
            <Grid item xs={12} className={classes.itemContainer} container>
                 <Grid item sm={1} xs={1}/>
                 <Grid item sm={10} xs={12} container alignItems="center">
                    {
                        reversed ? 
                        (
                            <>
                            <Grid item xs={12} sm={6} className={classes.imgGrid}>
                            <img className={classes.imgSection} src={imgUrl} alt=""/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h2" style={{color: '#fff', textAlign: 'left'}}>{name}</Typography>
                            <Typography variant="subtitle1" style={{color: '#fff', margin : '1em 0',  textAlign: 'left'}}>{description}</Typography>
                            <Button variant="outlined" style={{color: '#fff'}}>Buy Now</Button>
                        </Grid>
                            </>
                        ) : 
                        (
                            <>
                            <Grid item xs={12} sm={6}>
                         <Typography variant="h2" style={{color: '#fff'}}>{name}</Typography>
                         <Typography variant="subtitle1" style={{color: '#fff', margin : '1em 0'}}>{description}</Typography>
                         <Button variant="outlined" style={{color: '#fff'}}>Buy Now</Button>
                     </Grid>
                     <Grid item xs={12} sm={6}>
                     <img className={classes.imgSection} src={imgUrl} alt=""/>

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

export default ShopSection;