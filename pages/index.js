import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import useStyles from '../styles/indexStyles'

import TemplateDefault from '../src/templates/Default'
import Header from '../src/components/Header'
import CardInfo from '../src/components/Card'
import Carousel from '../src/components/Carousel'
import { imagesFeed, imagesInsights, imagesStories } from '../src/utils/setupCarouselImages'

const Home = () => {
  const { classes } = useStyles()
  const router = useRouter()

  const handleRedirect = (url) => {
    router.push(url)
  }
  
  return(
    <TemplateDefault>
      <Container maxWidth={`100vw`} className={classes.bgTop} disableGutters>
        <Header color={'#F6F8FF'} />

        <Container maxWidth='md' className={classes.container}>
          <motion.div
            initial={{ y: '-50vh' }}
            animate={{ y: '0' }}
            transition={{ type: 'spring' }}

          >
            <img src='images/logoAgencia.png' className={classes.logo}/>
          </motion.div>
        </Container>

        <Container maxWidth='md' className={classes.container}>

          <motion.div
            initial={{ x: '-50vw' }}
            animate={{ x: '0' }}
            transition={{ type: 'spring' }}
          >
            <Typography component='h1' color='white' className={classes.title}>
              Garanta o sucesso do seu negócio de forma estratégica
            </Typography>
          </motion.div>

          <motion.div
            initial={{ x: '50vw' }}
            animate={{ x: '0' }}
            transition={{ type: 'spring' }}
          >
            <Typography component='h3' color='white' className={classes.subTitle}>
              Somos especializados em Marketing Digital, ofertamos a estratégia completa para que seu negócio decole nas redes sociais
            </Typography>
          </motion.div>

        </Container>

        <Container maxWidth='md'>

          <motion.div
            initial={{ y: '50vh' }}
            animate={{ y: '0' }}
            transition={{ type: 'spring' }}
          >
            <Button
              variant="contained"
              color='primary'
              className={classes.button}
              onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços?')}
            >
              Contrate-nos
            </Button>
          </motion.div>

        </Container>

      </Container>       

      <Container maxWidth={`100vw`} className={classes.bgMid} disableGutters>

        <Container>

          <Typography component='h3' align='center' color='white' style={{paddingTop: '160px', paddingBottom: '24px', width: '100%'}} className={classes.h3}>
            Alguns de nossos serviços
          </Typography>

        </Container>

        <Container maxWidth='md' style={{paddingBottom: '160px'}}>

          <Grid container spacing='20px' style={{paddingBottom: '40px'}} justifyContent={'center'}>
            <Grid item md={3} sm={12}>
              <motion.div
                initial={{ y: '50%', }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: .2, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                <CardInfo
                  title='Identidade Estratégica'
                  text='Estruturação do seu perfil, transformando-o em um Instagram autêntico e com personalidade.'
                  image='/images/idEstrategica.jpg'
                
                /> 
              </motion.div>
            </Grid>

            <Grid item md={3} sm={12}>
              <motion.div
                initial={{ y: '50%', }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: .2, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                <CardInfo
                  title='Gerencimento Mensal'
                  text='Estratégias montadas com base em seus objetivos de marca. Com uma equipe completa de administração.'
                  image='/images/gerenciamentoMensal.jpg'
                
                />
              </motion.div>
            </Grid>

            <Grid item md={3} sm={12}>
              <motion.div
                initial={{ y: '50%', }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: .2, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                <CardInfo
                  title='Landing Pages'
                  text='Landing Pages pesonalizadas e com a cara do seu negócio para impulsionar seus resultados.'
                  image='/images/landingPage.jpg'
                
                />
              </motion.div>
            </Grid>

            <Grid item md={3} sm={12}>
              <motion.div
                initial={{ y: '50%', }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: .2, ease: 'easeInOut' }}
                viewport={{ once: true }}
              >
                <CardInfo
                  title='Criação de Logo'
                  text='Logos minimalistas e modernas que transmitem a essência da sua empresa.'
                  image='/images/criacaoLogo.jpg'
                
                />
              </motion.div>
            </Grid>
          </Grid>

          <Container maxWidth='md'>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: .8 }}
            >
              <Button
                variant="contained"
                color='primary'
                className={classes.button}
                style={{display: 'block', margin: '0 auto'}}
                onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços?')}
              >
                Lista completa
              </Button>
            </motion.div>

          </Container>
        </Container>

      </Container>         

      <Container maxWidth={`100vw`} disableGutters>

        <Container>

          <Typography component='h3' align='center' color='primary' style={{paddingTop: '160px', paddingBottom: '24px', width: '100%'}} className={classes.h3}>
            Alguns de nossos clientes
          </Typography>

        </Container>

        <Container maxWidth='md' style={{paddingBottom: '160px'}}>

          <Grid container spacing='70px' style={{paddingBottom: '40px'}} justifyContent={'center'}>
            <Grid item md={4} sm={12}>
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: .2, ease: 'easeIn' }}
                >
                  <img src='/images/HelanoMariz.jpg'  className={classes.clientsImage}/>
                  <Typography component='p' align='center' fontWeight={'bold'} color={'primary'}>
                    Helano Mariz
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

            <Grid item md={4} sm={12}>
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: .2, ease: 'easeIn' }}
                >
                  <img src='/images/logoPizzariaBakaninha.png' className={classes.clientsImage}/>
                  <Typography component='p' align='center' fontWeight={'bold'} color={'primary'}>
                    Bar e Pizzaria Bakaninha
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

            <Grid item md={4} sm={12}>
              <Box>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: .4, ease: 'easeIn' }}
                >
                  <img src='/images/CamilaStudio.jpg'  className={classes.clientsImage}/>
                  <Typography component='p' align='center' fontWeight={'bold'} color={'primary'}>
                    Studio Camila Martins
                  </Typography>
                </motion.div>
              </Box>
            </Grid>

          </Grid>

          <Container maxWidth='md'>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: .8 }}
            >
              <Button
                variant="contained"
                color='primary'
                className={classes.button}
                style={{display: 'block', margin: '0 auto'}}
                onClick={() => handleRedirect('/agency/portfolio')}
              >
                Mais informações
              </Button>
            </motion.div>

          </Container>
        </Container>

      </Container>

      <Container maxWidth={`100vw`} disableGutters>

        <Container>

          <Typography component='h3' align='center' color='primary' style={{paddingTop: '160px', paddingBottom: '24px', width: '100%'}} className={classes.h3}>
            Resultados que entregamos
            <br/>
            <span style={{fontSize: '10px', fontWeight: 'bold'}}>(Arraste para o lado nas imagens)</span>
          </Typography>

        </Container>

        <Container maxWidth='md' style={{paddingBottom: '160px'}}>

          <Grid container style={{paddingBottom: '40px'}} className={classes.containerGrid} rowSpacing={10}>
            <Grid item md={4} sm={12} alignSelf='center'>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .4, ease: 'easeIn' }}
              >
                <Carousel
                  title='Insights excelentes'
                  images={imagesInsights}
                  alt='Insights instagram'
                />
              </motion.div>
            </Grid>

            <Grid item md={4} sm={12}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .4, ease: 'easeIn' }}
              >
                <Carousel
                  title='Carrosséis infinitos'
                  images={imagesFeed}
                  alt='Carrosséis infinitos'
                />
              </motion.div>
            </Grid>

            <Grid item md={4} sm={12}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .4, ease: 'easeIn' }}
              >
                <Carousel
                  title='Stories que vendem'
                  images={imagesStories}
                  alt='Stories instagram'
                />
              </motion.div>
            </Grid>
          </Grid>

          <Container maxWidth='md'>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: .8 }}
            >
              <Button
                variant="contained"
                color='primary'
                className={classes.button}
                style={{display: 'block', margin: '0 auto'}}
                onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20fazer%20um%20orçamento%20com%20você.')}
              >
                Fazer orçamento
              </Button>
            </motion.div>

          </Container>
        </Container>

      </Container>
           
    </TemplateDefault>
  )
}

export default Home