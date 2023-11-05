import { Box, Container, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../../src/templates/Default'
import AvatarImage from '../../src/components/Avatar'

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
        marginBottom: 20,
      },
      title: {
        fontWeight: 'bold',
        textShadow: '1.5px 1.5px 1px rgba(72,72,72,0.2)',
        color: theme.palette.primary.main,
    }
    }
})

const About = () => {
    const { classes } = useStyles()
    return(
        <TemplateDefault>
            <Container maxWidth='md' className={classes.container}>
                <Typography component='h1' variant='h3' align='center' color='white'>
                    Sobre nós
                </Typography>
            </Container>

            <Container maxWidth='md'>
                <Box className={classes.box}>
                    <Box className={classes.boxHeader}>
                        <AvatarImage
                            title='Agência LM'
                            image='/images/agenciaLM.jpg'
                            width={300}
                            height={300}
                        />
                        <Typography component='span' variant='h6' className={classes.title}>
                            Lívia Gabriela e Matheus Amon
                        </Typography>
                    </Box>

                    <Typography component='p' variant='body1'>
                        Somos a Agência LM, fundada por Lívia Gabriela Oliveira Melgaço no ano de 2022. Um microemprendimento de Marketing Digital jovem que entrega resultandos grandes. Desde a fundação a nossa missão é oferecer autenticidade as marcas que assinam contrato, além de produzir conteúdos únicos que tem como base a estratégia. Não oferecemos apenas um post, mas uma estratégia para atingir seu objetivos.
                        <br/><br/>
                    </Typography>
                    <Typography component='p' variant='body1'>
                        Nossa equipe é composta por:
                        <br/>
                        - Lívia Gabriela Oliveira Melgaço: Social Media, estrategista e especialista em gerenciamento e posicionamento no Instagram;
                        <br/>
                        - Matheus Amon dos Santos Ferreira: Desenvolvedor Web Full Stack e Designer Gráfico.
                        <br/><br/>
                    </Typography>
                    <Typography component='p' variant='body1'>
                       Juntos queremos te ajudar a vender muito mais aqui no digital, administrando seu perfil com estratégia e excelência.
                    </Typography>
                </Box>
            </Container>
        </TemplateDefault>
    )
}

export default About