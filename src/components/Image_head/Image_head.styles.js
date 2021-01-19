import {makeStyles} from '@material-ui/styles';


const useStyle = makeStyles({
    itemHead:{
     display: 'flex',
     flexDirection:'column',
     alignItems:'center',
     justifyContent:'center',
     height: '100%',
     width:'100%'
    },
    itemDetails : {
        color: '#fff',
        flex: ".5",
        textAlign:'center'
    },
    img :{
        width: '50%',
        flex: '.5',
    },
    price :{
        textAlign : 'center'
 
    }
 })

 export default useStyle;