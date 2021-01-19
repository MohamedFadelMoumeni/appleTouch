import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header: {
      backgroundColor : 'rgba(0, 0, 0, 0.92)'
    },
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      drawer : {
         display: 'flex',
         flexDirection: 'column',
         alignItems:'center',
         background: '#000',
         color: '#fff',
         height: '100%',
         padding: '2em 0'
      },
      cart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        background: '#fff',
        color: '#000',
        height: '100%',
        padding: '2em 0'
  
      }
    }));

    export default useStyles;