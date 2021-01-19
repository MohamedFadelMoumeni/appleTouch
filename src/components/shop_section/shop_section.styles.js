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
export default useStyles; 