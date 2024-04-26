import { Box, Container, Typography } from '@mui/material'

import TemplateDefault from '../../../src/templates/Default'
import Header from '../../../src/components/Header'
import useStyles from '../../../styles/AboutStyles'

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
                        Lívia Melgaço
                      </Typography>
                      <img src='/images/agenciaLM.png' className={classes.img}/>
                      <Typography component='p' variant='body1' className={classes.text}>
                          A Agência LM foi por Lívia Melgaço no ano de 2022. Um emprendimento de Marketing Digital jovem que entrega resultandos grandes. Desde a fundação a nossa missão é oferecer autenticidade as marcas que assinam contrato, além de produzir conteúdos únicos que tem como base a estratégia. Não oferecemos apenas um post, mas uma estratégia para atingir seu objetivos.
                          <br/><br/>
                      </Typography>
                      <Typography component='p' variant='body1' className={classes.text}>
                          Lívia Melgaço: Social Media, estrategista e especialista em gerenciamento e posicionamento no Instagram;
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