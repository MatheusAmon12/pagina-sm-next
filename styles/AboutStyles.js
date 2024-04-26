import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return{
      containerBg: {
        backgroundImage: 'url(/images/aboutBG.jpg)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('sm')]: {
          backgroundImage: 'url(/images/aboutBG-sm.jpg)',
        }
      },
      container: {
        marginBottom: theme.spacing(6),
      },
      box: {
        padding: '80px 0 160px',
      },
      subTitle: {
        fontWeight: 'bold',
        color: '#F6F8FF',
      },
      title: {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.8em',
          width: '350px'
        },
        fontSize: '38px',
        fontWeight: 'bold',
        color: '#F6F8FF',
        width: '400px',
      },
      img: {
        width: '250px',
        padding: '40px 0',
        [theme.breakpoints.down('sm')]: {
          display: 'block',
          margin: '40px auto',
        }
      },
      text: {
        width: '430px',
        fontSize: '16px',
        color: '#F6F8FF',
        lineHeight: '26px',
        [theme.breakpoints.down('sm')]: {
          width: '350px'
        }
      }
    }
})

export default useStyles