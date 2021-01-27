import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
   
    sectionContainer : {
        background : '#05192d'
    },
    itemContainer : {
     
        padding: '2.5em 1em'
    },
    imgSection : {
        width: '80%',
        transition: 'all .8s',
        textAlign :'center',
        cursor: 'pointer',
        '&:hover': {
         transform :'rotate(5deg)'
        }
    },
    imgGrid : {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    imgGridSecond : {
        
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
 });
export default useStyles; 