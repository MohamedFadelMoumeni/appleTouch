import React from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Carousel from 'react-elastic-carousel';
import ImageHead from '../Image_head/Image_head.component';
import Typical from 'react-typical'

import './Head.styles.css';



const useStyles = makeStyles({
  mainContainer: {
    backgroundColor : 'rgba(0, 0, 0, 0.9)',
   padding :'5em 0',
    color: '#fff'
  },
  paper: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#fff',
    borderRadius: '10px'

  },
  title : {
    fontWeight : 'bold',
  },
  img: {
    backgroundColor : 'transparent'
  },
  air:{
    color: '#1a508b'
  }
})
const Head = () => {
  const classes = useStyles();
    return(
      <Grid container className={classes.mainContainer} alignItems="center" justify="center">
      <Grid item sm={1} />
      <Grid item sm={10} xs={12} container alignItems="center" justify="center" spacing={2}>
        <Grid item sm={6} xs={12}>
        <Typography variant="h3" style={{padding: '0 .5em'}}>
        <Typical
        steps={['AirPods.', 1000, 'AirPods Pro.', 500, 'AirPods Max.', 500]}
        loop={Infinity}
      />
        </Typography>
          <Typography variant="subtitle1" style={{padding: '0 1em'}}>Après une configuration en un seul geste, vos AirPods s’activent automatiquement et restent toujours connectés1. Pour les utiliser, c’est tout aussi simple. Les AirPods détectent quand vous les placez à l’oreille et mettent en pause ce que vous écoutez dès que vous les retirez. 

</Typography>

        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper elevation={3} className={classes.paper}>
          <Carousel itemsToShow={1} autoPlaySpeed={4500} enableAutoPlay >
               <ImageHead price="100" title="AirPods Pro" imgUrl="https://img.xfinitymobile.com/image/fetch/e_trim/w_420,h_420,c_fit,f_auto,q_auto,fl_lossy/https%3A%2F%2Fimg.xfinitymobile.com%2Fimage%2Fupload%2Fv1572896833%2Fclient%2Fcatalog%2Faccessories%2Fapple%2F190199246850_PRI.png"/>
               <ImageHead price="70" title="AirPods" imgUrl="https://www.worldshop.eu/medias/sys_master/h19/hd5/8912198533150.png"/>
               <ImageHead price="200" title="Airpods Max" imgUrl="https://www.apple.com/v/airpods-max/a/images/overview/hero__gnfk5g59t0qe_small.png"/>

</Carousel>
          </Paper>
        </Grid>
      </Grid>
      <Grid item sm={1} />
      </Grid>

    )
};
export default Head;
 