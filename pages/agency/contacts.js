import { Box, Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../../src/templates/Default'

const useStyles = makeStyles()((theme) => {
    return{
      container: {
        marginBottom: theme.spacing(6),
      },
      box:{
        background: 'rgba(225, 138, 212, 0.17)',
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
      },
      boxSocial:{
        display: 'flex',
        alignItems: 'center',
      },
      socialIcon: {
        width: 100,
      }
    }
})

const Contacts = () => {
    const { classes } = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth='md' className={classes.container}>
                <Typography component='h1' variant='h3' align='center' color='white'>
                    Contatos
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Box className={classes.boxSocial}>
                        <img src='/images/instagramLogo.png' className={classes.socialIcon}/>
                        <Typography 
                            component='span' 
                            variant='h6' 
                            style={{marginLeft: '-10px', textShadow: '2px 2px 6px rgba(72,72,72,0.48)'}} color='white'
                        >
                            @liviagabriela.sm
                        </Typography>
                    </Box>

                    <Box className={classes.boxSocial}>
                        <img src='/images/whatsappLogo.png'className={classes.socialIcon}/>
                        <Typography 
                            component='span' 
                            variant='h6' 
                            style={{marginLeft: '-10px', textShadow: '2px 2px 6px rgba(72,72,72,0.48)'}} color='white'
                        >
                            38 9 9262-2985
                        </Typography>
                    </Box>          
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default Contacts