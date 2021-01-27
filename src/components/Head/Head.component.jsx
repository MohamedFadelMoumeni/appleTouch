import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {Grid, Typography, Paper, Button} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import ImageHead from '../Image_head/Image_head.component';
import {selectHeadData} from '../../redux/head_data/head_data.selectors';
import {connect} from 'react-redux';
import Pub from '../pub/pub.component';
import './Head.styles.css';

import useStyles from './Head.styles';


const Head = ({items_head}) => {
  const history = useHistory();
  const classes = useStyles();
  const [openPub, setopenPub] = useState(true);
    return(
      <Grid container className={classes.prevContainer}>
        <Grid container className={classes.mainContainer} alignItems="center" justify="center">
      <Grid item sm={1} />
      <Grid item sm={10} xs={12} container alignItems="center" justify="center" spacing={2}>
        <Grid item sm={6} xs={12}>
        <Typography variant="h3" style={{ fontWeight:'bolder', fontSize: '3rem', margin: '.5em 0'}}>
        <span style={{color: '#fcce0d'}}>Welcome</span> To earTouch.
        </Typography>
          <Typography variant="h4" style={{fontSize:'1.3em', maxWidth:'400px'}}>
          We’re on a mission to boost mental health by celebrating feel-good moods every month. 
     </Typography>
<Button  style={{color: '#fff', background: 'rgb(3, 239, 98)', width:'350px', padding:'1em 2em', margin: '1.8em 0'}} onClick={() => history.push('/shop')}>SHOP NOW.</Button>
<Button  style={{color: 'rgb(252, 206, 13)',border: '2px solid rgb(252, 206, 13)' , width:'350px', padding:'1em 2em'}}>CONTACT US.</Button>

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
      {
        openPub ? (<Pub handleClick={() => setopenPub(false)}/>) : null
      }
      

      </Grid>
    )
};

const mapStateToProps = state => ({
  items_head : selectHeadData(state)
})
export default connect(mapStateToProps)(Head);
 