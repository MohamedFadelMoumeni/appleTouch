import React from 'react';
import {Grid , Typography, Avatar} from '@material-ui/core';
import Carousel from 'react-elastic-carousel';
import {makeStyles} from '@material-ui/styles';
 
const useStyles = makeStyles({
    ClientReview : {
        width: '100%',
        background: '#7933ff',
        padding: '1em 0',
        color: '#fff',
    },
    review: {
        color: 'rgb(5, 25, 45)',
        width: '80%',
        padding: '20px',
        textAlign:'center',
        outline: 'none',
        background:'#fff',
        borderRadius:'8px',
        borderTop :'3px solid  rgb(252, 206, 13)',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
        
    },
    text :{
        fontWeight : 'bold'
    }
})
const ClientReview = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.ClientReview}>
            <Grid item xs={12}>
                <Typography variant="h4" style={{textAlign:'center', fontWeight:'bold', padding:'1em'}}>Don’t just take our word for it.</Typography>
            <Carousel itemsToShow={1} autoPlaySpeed={4500} enableAutoPlay >
             <div className={classes.review}>
                 <Avatar style={{marginBottom:'1em', width: '70px', height: '70px'}} src="http://images02.nicepage.io/a1389d7bc73adea1e1c1fb7e/321a602f753f56b988c51b1d/grayscale-photography-of-woman-wearing-coat-and-fedora-hat-2947337.jpg"/>
             <Typography variant="h5" className={classes.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit pariatur nobis, quo possimus quis ipsum quod voluptatem repellendus officiis.</Typography>
             </div>
             <div className={classes.review}>
             <Avatar style={{marginBottom:'1em', width: '70px', height: '70px'}} src="http://images02.nicepage.io/a1389d7bc73adea1e1c1fb7e/1f969468ea205425b70c5c31/pexels-photo-555790.jpg?version="/>
             <Typography variant="h5" className={classes.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit pariatur nobis, quo possimus quis ipsum quod voluptatem repellendus officiis.</Typography>
             </div>
             <div className={classes.review}>
             <Avatar style={{marginBottom:'1em', width: '70px', height: '70px'}} src="https://www.w3schools.com/w3images/avatar_g2.jpg"/>
                 <Typography variant="h5" className={classes.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit pariatur nobis, quo possimus quis ipsum quod voluptatem repellendus officiis.</Typography>

             </div>

</Carousel>
            </Grid>
        </Grid>
    )
}

export default ClientReview;