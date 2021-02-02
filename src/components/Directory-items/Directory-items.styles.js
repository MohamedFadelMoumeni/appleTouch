import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
   
    cartItem: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '300px',
        margin : '1em',
        textAlign : 'center',
        
        color: '#fff'
    },
    cartItemImg: {
        width: '40%'
    },
    detailsItem: {
        textAlign :'left',
        fontWeight :'0',
        marginLeft :'.9em'
    },
    titleItem : {
        fontSize: '.9em',
       
    }
  })

  export default useStyles;