import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles({
    headShop: {
        height: '70vh',
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        color: '#fff',
    },
    headShopItem :{
        height: '100%',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    titleShop: {
        fontWeight:'bolder'
    },
    items: {
        padding:'3em 0',
        background :'#fff',
        display: 'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    },
    directory :{
        background :'#fff'
    }
})

export default useStyles;