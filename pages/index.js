import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import useStyles from './indexStyles'

import TemplateDefault from '../src/templates/Default'
import CardInfo from '../src/components/Card'
import Carousel from '../src/components/Carousel'

import carousel11 from '../public/images/carousel11.png'
import carousel12 from '../public/images/carousel12.png'
import carousel13 from '../public/images/carousel13.png'
import carousel14 from '../public/images/carousel14.png'

import carousel21 from '../public/images/mockup-stories-1.png'
import carousel22 from '../public/images/mockup-stories-2.png'
import carousel23 from '../public/images/mockup-stories-3.png'
import carousel24 from '../public/images/mockup-stories-4.png'

import carousel31 from '../public/images/insights1.png'
import carousel32 from '../public/images/insights2.png'
import carousel33 from '../public/images/insights3.png'
import carousel34 from '../public/images/insights4.png'

const imagesInsights = [carousel31, carousel32, carousel33, carousel34]
const imagesStories = [carousel21, carousel22, carousel23, carousel24]
const imagesFeed = [carousel11, carousel12, carousel13, carousel14]

const Home = () => {
  const { classes } = useStyles()
  const router = useRouter()

  const handleRedirect = (url) => {
    router.push(url)
  }
  
  return(
    <TemplateDefault>
      <Container maxWidth={`100vw`} className={classes.bgTop} disableGutters>

        <Container maxWidth='md' className={classes.container}>
          <img src='images/logoAgencia.png' className={classes.logo}/>
        </Container>

        <Container maxWidth='md' className={classes.container}>

          <Typography component='h1' color='white' className={classes.title}>
            Garanta o sucesso do seu negócio de forma estratégica
          </Typography>

          <Typography component='h3' color='white' className={classes.subTitle}>
            Somos especializados em Marketing Digital, ofertamos a estratégia completa para que seu negócio decole nas redes sociais
          </Typography>

        </Container>

        <Container maxWidth='md'>

          <Button 
            variant="contained" 
            color='primary' 
            className={classes.button}
            onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços?')}
          >
            Contrate-nos
          </Button>

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
              <CardInfo 
                title='Identidade Estratégica'
                text='Estruturação do seu perfil, transformando-o em um Instagram autêntico e com personalidade.'
                image='/images/idEstrategica.png'
              
              />
            </Grid>

            <Grid item md={3} sm={12}>
              <CardInfo 
                title='Gerencimento Mensal'
                text='Estratégias montadas com base em seus objetivos de marca. Com uma equipe completa de administração.'
                image='/images/gerenciamentoMensal.png'
              
              />
            </Grid>

            <Grid item md={3} sm={12}>
              <CardInfo 
                title='Landing Pages'
                text='Landing Pages pesonalizadas e com a cara do seu negócio para impulsionar seus resultados.'
                image='/images/landingPage.png'
              
              />
            </Grid>

            <Grid item md={3} sm={12}>
              <CardInfo 
                title='Criação de Logo'
                text='Logos minimalistas e modernas que transmitem a essência da sua empresa.'
                image='/images/criacaoLogo.png'
              
              />
            </Grid>
          </Grid>

          <Container maxWidth='md'>

            <Button 
              variant="contained" 
              color='primary' 
              className={classes.button} 
              style={{display: 'block', margin: '0 auto'}}
              onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços?')}
            >
              Lista completa
            </Button>

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
                <img src='/images/logoPizzariaBakaninha.png' className={classes.clientsImage}/>
                <Typography component='p' align='center' fontWeight={'bold'} color={'primary'}>
                  Bar e Pizzaria Bakaninha
                </Typography>
              </Box>
            </Grid>

            <Grid item md={4} sm={12}>
              <Box>
                <img src='/images/CamilaStudio.jpg'  className={classes.clientsImage}/>
                <Typography component='p' align='center' fontWeight={'bold'} color={'primary'}>
                  Studio Camila Martins
                </Typography>
              </Box>
            </Grid>

            <Grid item md={4} sm={12}>
              <Box>
                <img src='/images/logoClinica.png'  className={classes.clientsImage}/>
                <Typography component='p' align='center' fontWeight={'bold'} color={'primary'}>
                  Clínica São Sebastião
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Container maxWidth='md'>

            <Button 
              variant="contained" 
              color='primary' 
              className={classes.button} 
              style={{display: 'block', margin: '0 auto'}}
              onClick={() => handleRedirect('/agency/portfolio')}
            >
              Mais informações
            </Button>

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
              <Carousel 
                title='Insights excelentes'
                images={imagesInsights}
                alt='Insights instagram'
              />
            </Grid>

            <Grid item md={4} sm={12}>
              <Carousel 
                title='Carrosséis infinitos'
                images={imagesFeed}
                alt='Carrosséis infinitos'
              />
            </Grid>

            <Grid item md={4} sm={12}>
              <Carousel 
                title='Stories que vendem'
                images={imagesStories}
                alt='Stories instagram'
              />
            </Grid>
          </Grid>

          <Container maxWidth='md'>

            <Button 
              variant="contained" 
              color='primary' 
              className={classes.button} 
              style={{display: 'block', margin: '0 auto'}}
              onClick={() => handleRedirect('https://wa.me/5538992622985/?text=Gostaria%20de%20fazer%20um%20orçamento%20com%20você.')}
            >
              Fazer orçamento
            </Button>

          </Container>
        </Container>

      </Container>
           
    </TemplateDefault>
  )
}

export default Home