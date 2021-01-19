import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    popularGrid:{
        color: "#fff",
        
    },
    styleOne : {
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url("https://storage.covet.pics/postassets/6999880/standard_resolution/443300bf9836cfa2693a6cad9edabe12")',
        backgroundPosition: 'center',
        backgroundSize :'cover',
        height: '100vh',
        cursor: 'pointer',
        
        '&:hover':{
            background:'linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://storage.covet.pics/postassets/6999880/standard_resolution/443300bf9836cfa2693a6cad9edabe12");',
            backgroundPosition: 'center',
            backgroundSize :'cover',
        }
    },
    styleTwo :{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url("https://storage.covet.pics/postassets/6906141/standard_resolution/a17b4c9e25509a56a5de6a3246050679")',
        backgroundPosition: 'center',
        backgroundSize :'cover',
        cursor: 'pointer',
        height: '50vh',
        transition: "all .5s",
        '&:hover':{
            background:'linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://storage.covet.pics/postassets/6906141/standard_resolution/a17b4c9e25509a56a5de6a3246050679");',
            backgroundPosition: 'center',
            backgroundSize :'cover',
        }
     

    },
    styleThree :{
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundImage:'url("https://storage.covet.pics/postassets/6950740/standard_resolution/6e2064b41a878d59d30ed942204dae99")',
        backgroundPosition: 'center',
        backgroundSize :'cover',
        cursor: 'pointer',
        height: '50vh',
        transition: "all .5s",
        '&:hover':{
            background:'linear-gradient(0deg, rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url("https://storage.covet.pics/postassets/6950740/standard_resolution/6e2064b41a878d59d30ed942204dae99");',
            backgroundPosition: 'center',
            backgroundSize :'cover',
           
            
            
        }
       

    },
    btnLook :{
        color: '#fff',
        textTransform: 'capitalize',
       
        
    }
    
})
export default useStyles;