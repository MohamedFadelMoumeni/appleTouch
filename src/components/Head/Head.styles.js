import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    prevContainer : {
      backgroundImage: `url('https://www.apple.com/v/airpods-2nd-generation/b/images/overview/battery__f8c24btnp5ei_large.jpg')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },
    mainContainer: {
      backgroundColor : 'rgba(0, 0, 0, 0.9)',
     padding :'5em 0',
      color: '#fff',
      
    },
    paper: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: '#fff',
      borderRadius: '10px'
  
    },
    title : {
      fontWeight : 'bold',
    },
    img: {
      backgroundColor : 'transparent'
    },
    air:{
      color: '#1a508b'
    }
  })

  export default useStyles;