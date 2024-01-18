import { makeStyles } from "tss-react/mui"

const useStyles = makeStyles()((theme) => {
    return{
      title: {
        [theme.breakpoints.down('sm')]: {
          fontSize: '32px',
          width: '350px',
          lineHeight: '42px',
        },
        fontSize: '38px',
        lineHeight: '48px',
        fontWeight: 'regular',
        width: 430,
        marginBottom: '24px',
      },
      subTitle: {
        [theme.breakpoints.down('sm')]: {
          width: '350px'
        },
        fontSize: '18px',
        lineHeight: '28px',
        width: 430,
        marginBottom: '40px',
      },
      h3: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '34px',
        marginBottom: '40px',
      },
      logo: {
        marginTop: '40px',
        width: 100,
        marginBottom: '80px',
      },
      button: {
        width: '250px',
        height: '62px',
        marginBottom: '160px',
        boxShadow: '-2px 10px 40px 4px rgba(19,3,31,0.45)',
      },
      bgTop: {
        backgroundImage: 'url(/images/background-top.png)',
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
          backgroundImage: 'url(/images/background-top-sm.png)'
        },
      },
      bgMid: {
        backgroundImage: 'url(/images/background-mid.png)',
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
          backgroundImage: 'url(/images/background-mid-sm.png)'
        },
      },
      bgBottom: {
        backgroundImage: 'url(/images/background-bottom.png)',
        backgroundSize: 'cover'
      },
      clientsImage: {
        width: '250px',
        borderRadius: '50%',
        boxShadow: '1px 10px 25px -3px rgba(0,0,0,0.2)',
        marginBottom: '24px'
      },
      containerGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }
    }
  })

  export default useStyles