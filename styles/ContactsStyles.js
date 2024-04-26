import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
    return{
      contactBg: {
        backgroundImage: 'url(/images/contactBG.jpg)',
        backgroundAttachment: 'fixed',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: 'url(/images/contactBG-sm.jpg)'
        }
      },
      box:{
        background: 'rgba(99, 29, 118, 0.9)',
        borderRs: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(7.7px)',
        border: '1px solid rgba(225, 138, 212, 0.06)',
        borderRadius: 10,
        padding: theme.spacing(6),
        marginBottom: theme.spacing(6),

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
      },
      boxSocial:{
        display: 'flex',
        alignItems: 'center',
      },
      socialIcon: {
        width: 100,
      },
      title: {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.8em',
        },
        fontWeight: 'bold',
      }
    }
})

export default useStyles