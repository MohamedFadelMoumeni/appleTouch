import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
  nameShopSection: {
    color: 'rgb(252, 206, 13)', 
    textAlign: 'left', 
    fontWeight:'bold',
    '@media screen and (max-width: 900px)':{
     fontWeight:'normal',
     fontSize: '2.8em'
    }
  },
  descShopSection:{
    color: '#fff', margin : '1em 0',  textAlign: 'left',  maxWidth: '500px'
  },
  btnShopSection:{
    color: '#fff', background:'rgb(3, 239, 98)'
  }
})

export default useStyles