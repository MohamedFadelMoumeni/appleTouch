import React from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import ImageHead from '../Image_head/Image_head.component';
import Typical from 'react-typical'
import {selectHeadData} from '../../redux/head_data/head_data.selectors';
import {connect} from 'react-redux';
import './Head.styles.css';

import useStyles from './Head.styles';


const Head = ({items_head}) => {
  const classes = useStyles();
    return(
      <Grid container className={classes.prevContainer}>
        <Grid container className={classes.mainContainer} alignItems="center" justify="center">
      <Grid item sm={1} />
      <Grid item sm={10} xs={12} container alignItems="center" justify="center" spacing={2}>
        <Grid item sm={6} xs={12}>
        <Typography variant="h3" style={{padding: '0 .5em', height:'100px'}}>
        <Typical
        steps={['Earbus.', 1000, 'Weired Earbus.', 500, 'Headphones.', 500]}
        loop={Infinity}
      />
        </Typography>
          <Typography variant="subtitle1" style={{padding: '0 1em'}}>Après une configuration en un seul geste, vos AirPods s’activent automatiquement et restent toujours connectés1. Pour les utiliser, c’est tout aussi simple. Les AirPods détectent quand vous les placez à l’oreille et mettent en pause ce que vous écoutez dès que vous les retirez. 

</Typography>

        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper elevation={3} className={classes.paper}>
          <Carousel itemsToShow={1} autoPlaySpeed={4500} enableAutoPlay >
            {
              items_head.map(item => (
                <ImageHead key={item.id} item={item}/>

              ))
            }

</Carousel>
          </Paper>
        </Grid>
      </Grid>
      <Grid item sm={1} />
      </Grid>

      </Grid>
    )
};

const mapStateToProps = state => ({
  items_head : selectHeadData(state)
})
export default connect(mapStateToProps)(Head);
 