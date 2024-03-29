import { Box, Container, Typography, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import CopyrightIcon from '@mui/icons-material/Copyright'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'

const useStyles = makeStyles()((theme) => {
    return{
        container: {
            background: theme.palette.secondary.main,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding: theme.spacing(12),
        },
        boxCopy: {
            display: 'flex',
            justifyContent: 'center',
        },
        marginBox: {
            marginBottom: 5,
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column',
            }
        },
        socialIcons: {
            marginBottom: 5,
        }
    }
})

const Footer = () => {
    const { classes } = useStyles()
    const router = useRouter()

    const handleRedirect = (url) => {
        router.push(url)
    }

    return(
        <Container maxWidth={`100vw`} className={classes.container}>
            <Box className={classes.socialIcons}>
                <IconButton aria-label="whatsapp" color="primary" onClick={() => handleRedirect('https://api.whatsapp.com/send?1=pt_BR&phone=553892622985')}>
                    <WhatsAppIcon />
                </IconButton>

                <IconButton aria-label="istagram" color="primary" onClick={() => handleRedirect('https://www.instagram.com/agencialm.marketing/')}>
                    <InstagramIcon />
                </IconButton>
            </Box>

            <Box className={classes.marginBox}>
                <Button onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços?')}>
                    <Typography component='span' variant='caption' color='#F6F8FF'>
                        Informações
                    </Typography>
                </Button>
                <Button onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Olá,%20estou%20precisando%20de%20ajuda.%20Pode%20me%20ajudar?')}>
                    <Typography component='span' variant='caption' color='#F6F8FF' >
                        Suporte
                    </Typography>
                </Button>
                <Button onClick={() => handleRedirect('/agency/contacts')}>
                    <Typography component='span' variant='caption' color='#F6F8FF'>
                        Contatos
                    </Typography>
                </Button>
            </Box>

            <Box className={classes.boxCopy}>
                <CopyrightIcon color='secondary' fontSize='small' style={{marginRight: '2px'}}/>
                <Typography 
                    component='span' 
                    variant='caption' 
                    color='#F6F8FF' 
                    style={{marginLeft: '2px'}}
                >
                    © 2024 Agência LM
                </Typography>
            </Box>

        </Container>
    )
}

export default Footer