import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    header: {
      backgroundColor : '#05192d'
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
  
      },
      user: {
        display: 'flex',
        flexDirection:'column',
        position:'relative'
      },
      userDetails: {
        position:'absolute',
        top: '70px',
        right: '20px',
        background:'whitesmoke',
        color:'#000',
        borderRadius:'10px',
        width: '300px',
        height: '400px',
        zIndex: '20'
      },
      topUserDetails: {
        width: '100%',
        background:'#fff',
        textAlign:'center',
        padding: '20px 0',
        borderRadius:'10px',
      }
    }));

    export default useStyles;