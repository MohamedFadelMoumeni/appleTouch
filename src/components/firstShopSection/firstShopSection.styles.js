import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
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
        alignItems: 'center',
        '@media screen and (max-width: 900px)':{
            justifyContent:'center'
          }
    },
    imgGridSecond : {
        
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '@media screen and (max-width: 900px)':{
            justifyContent:'center'
          }
    },
})

export default useStyles