import { Box, Button, Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'

import TemplateDefault from '../../src/templates/Default'
import Header from '../../src/components/Header'

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

const Contacts = () => {
    const { classes } = useStyles()
    const router = useRouter()
    
    const handleRedirect = (url) => {
        router.push(url)
    }

    return(
        <TemplateDefault>
            <Container maxWidth={'100vw'} className={classes.contactBg}>
                <Header color={'#F6F8FF'} />
                <Container maxWidth='md' style={{padding: '160px 0px'}}>
                    <Box className={classes.box}>
                        <Box className={classes.boxSocial}>
                            <img src='/images/instagramLogo.png' className={classes.socialIcon}/>

                            <Button 
                                style={{textTransform: 'lowercase'}} 
                                onClick={() => handleRedirect('https://www.instagram.com/liviamelgaco.sm/')}
                            >
                                <Typography
                                    component='span'
                                    variant='h6'
                                    style={{marginLeft: '-10px'}} color='white'
                                >
                                    @liviagabriela.sm
                                </Typography>
                            </Button>
                        </Box>
                        <Box className={classes.boxSocial}>
                            <img src='/images/whatsappLogo.png'className={classes.socialIcon}/>

                            <Button
                                style={{textTransform: 'lowercase'}} 
                                onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços?')}
                            >
                                <Typography
                                    component='span'
                                    variant='h6'
                                    style={{marginLeft: '-10px'}} color='white'
                                >
                                    38 9 9262-2985
                                </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </TemplateDefault>
    )
}

export default Contacts