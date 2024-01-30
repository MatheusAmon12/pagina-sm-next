import { Container, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useRouter } from 'next/router'

import TemplateDefault from '../../src/templates/Default'
import Header from '../../src/components/Header'

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
        },
        fontSize: '38px',
        fontWeight: 'bold',
      },
      content: {
        marginTop: '24px',
        width: '430px',
        lineHeight: '32px',
        fontSize: '22px',
      },
      backgroundCamilaMartins: {
        backgroundImage: 'url(/images/studioCamilaBG.png)',
        backgroundSize: 'cover',
        paddingBottom: '40px',
      },
      backgroundBakaninha: {
        backgroundImage: 'url(/images/bakaninhaBG.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingTop: '40px',
        paddingBottom: '120px',
      }
    }
})

const Portfolio = () => {
    const { classes } = useStyles()
    const router = useRouter()

    const handleRedirect = (url) => {
        router.push({
            pathname: url,
            
        })
    }

    return(
        <TemplateDefault>
            <Container maxWidth={`100vw`} className={classes.backgroundCamilaMartins}>
                <Header color={'secondary'} />
                <Container maxWidth='md' className={classes.container}>
                    <Typography component='h1' color='primary' className={classes.title}>
                        Studio Camila Martins
                    </Typography>

                    <Typography component='p' color='secondary' className={classes.content}>
                        Durante 6 meses trabalhamos no perfil do Studio Camila Martins. A primeira coisa que fizemos foi reposicionar e criar uma nova identidade para marca, conhecendo quem era o público alvo e seus objetivos. 
                    </Typography>

                    <Typography component='p' color='secondary' className={classes.content}>
                        De um perfil infantilizado e sem estratégia, fomos para um perfil profissional e com personalidade. Criamos uma estratégia de conteúdos alinhada com esse novo posicionamento e conseguimos aumentar o engajamento da conta e aumentar o número de seguidores.
                    </Typography>

                    <Button onClick={() => handleRedirect('https://www.instagram.com/camilamartins.studio/')}>
                        <Typography component='span' variant='caption' color='primary'>
                            ver instagram
                        </Typography>
                    </Button>

                </Container>
            </Container>

            <Container maxWidth={`100vw`} className={classes.backgroundBakaninha}>
                <Container maxWidth='md' className={classes.container}>
                    <Typography component='h1' color='#FFCC00' className={classes.title}>
                        Bar e Pizzaria Bakaninha
                    </Typography>

                    <Typography component='p' color='white' className={classes.content}>
                        O Bar e Pizzaria Bakaninha carregava um perfil que não demonstrava a identidade da marca, o perfil possuía muitos ruídos na comunicação e então criamos uma Identidade Estratégica onde a característica principal elencada foi a nostalgia.
                    </Typography>

                    <Typography component='p' color='white' className={classes.content}>
                        Depois iniciamos o Gerenciamento Mensal Personalizado e atingimos a marca de 4 mil contas alcançadas mensalmente e 111 seguidores por mês.
                    </Typography>

                    <Button onClick={() => handleRedirect('https://www.instagram.com/barepizzariabakaninha/')}>
                        <Typography component='span' variant='caption' color='#FFCC00'>
                            ver instagram
                        </Typography>
                    </Button>

                </Container>
            </Container>

            {/**<Container maxWidth='md'>
                <Box className={classes.box}>
                    
                    <Box className={classes.boxHeader}>
                        <AvatarImage
                            title='Studio Camila Martins'
                            image='/images/CamilaStudio.jpg'
                            width={150}
                            height={150}
                        />
                        <Typography component='h3' variant='h5'>
                            Studio Camila Martins
                        </Typography>
                    </Box>
                    <Typography component='p' variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>

                <Box className={classes.box}>
                    <Box className={classes.boxHeader}>
                        <AvatarImage
                            title='Bar e Pizzaria Bakaninha'
                            image='/images/LogoBakaninha.png'
                            width={150}
                            height={150}
                        />
                        <Typography component='h3' variant='h5'>
                            Bar e Pizzaria Bakaninha
                        </Typography>
                    </Box>
                    <Typography component='p' variant='body1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </Box>
    </Container>**/}
        </TemplateDefault>
    )
}

export default Portfolio