import { Box, Button, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import TemplateDefault from '../../src/templates/Default'
import Header from '../../src/components/Header'
import useStyles from '../../styles/ContactsStyles'

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
                                onClick={() => handleRedirect('https://www.instagram.com/agencialm.marketing/')}
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