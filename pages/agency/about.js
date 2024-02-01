import { Box, Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../../src/templates/Default'
import Header from '../../src/components/Header'

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

const About = () => {
    const { classes } = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth={`100vw`} className={classes.containerBg}>
              <Header color={'#F6F8FF'} />
              <Container maxWidth='md'>
                  <Box className={classes.box}>
                      <Typography className={classes.subTitle}>
                        SOBRE
                      </Typography>
                      <Typography className={classes.title}>
                        Lívia Gabriela O Melgaço
                      </Typography>
                      <img src='/images/agenciaLM.png' className={classes.img}/>
                      <Typography component='p' variant='body1' className={classes.text}>
                          Somos a Agência LM, fundada por Lívia Gabriela Oliveira Melgaço no ano de 2022. Um microemprendimento de Marketing Digital jovem que entrega resultandos grandes. Desde a fundação a nossa missão é oferecer autenticidade as marcas que assinam contrato, além de produzir conteúdos únicos que tem como base a estratégia. Não oferecemos apenas um post, mas uma estratégia para atingir seu objetivos.
                          <br/><br/>
                      </Typography>
                      <Typography component='p' variant='body1' className={classes.text}>
                          Lívia Gabriela Oliveira Melgaço: Social Media, estrategista e especialista em gerenciamento e posicionamento no Instagram;
                          <br/><br/>
                      </Typography>
                      <Typography component='p' variant='body1' className={classes.text}>
                         Juntos queremos te ajudar a vender muito mais aqui no digital, administrando seu perfil com estratégia e excelência.
                      </Typography>
                  </Box>
              </Container>
            </Container>
        </TemplateDefault>
    )
}

export default About