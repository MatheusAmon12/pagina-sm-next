import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return{
      container: {
        marginBottom: theme.spacing(6),
      },
      box:{
        borderRadius: '10px',
        background: theme.palette.background.default,
        boxShadow:  '0px 0px 11px -3px rgba(64,64,64,0.82)',
        padding: theme.spacing(6),
        marginBottom: theme.spacing(6),
      },
      boxHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 20
      },
      title: {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.8em',
          width: '350px',
        },
        fontSize: '38px',
        fontWeight: 'bold',
      },
      content: {
        marginTop: '24px',
        width: '430px',
        lineHeight: '32px',
        fontSize: '22px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            lineHeight: '26px',
            width: '350px',
        }
      },
      backgroundCamilaMartins: {
        backgroundImage: 'url(/images/studioCamilaBG.png)',
        backgroundSize: 'cover',
        paddingBottom: '40px',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url(/images/studioCamilaBG-sm.jpg)'
        }
      },
      backgroundBakaninha: {
        backgroundImage: 'url(/images/bakaninhaBG.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: '40px',
        paddingBottom: '120px',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url(/images/bakaninhaBG-sm.jpg)'
        }
      }
    }
})

export default useStyles