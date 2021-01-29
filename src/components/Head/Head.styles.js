import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    prevContainer : {
      backgroundColor : '#05192d',
    },
    mainContainer: {
      backgroundColor : '#05192d',
     padding :'5em 0',
      color: '#fff',
      
    },
    paper: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#fff',
      borderRadius: '10px',
      
  
    },
    title : {
      fontWeight : 'bold',
    },
    img: {
      backgroundColor : 'transparent'
    },
    air:{
      color: '#1a508b'
    },
    buttonHeadFirst: {
      color: '#fff', background: 'rgb(3, 239, 98)', width:'350px', padding:'1em 2em', margin: '1.8em 0',
      '@media screen and (max-width : 1000px)':{
        width: '90%'
      }
    },
    buttonHeadSecond :{
      color: 'rgb(252, 206, 13)',border: '2px solid rgb(252, 206, 13)' , width:'350px', padding:'1em 2em',
      '@media screen and (max-width: 1000px)':{
        width: '90%'
      }
    }
  })

  export default useStyles;