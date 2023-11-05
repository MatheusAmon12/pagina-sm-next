import { Container, Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import TemplateDefault from '../src/templates/Default'
import CardInfo from '../src/components/Card'

const useStyles = makeStyles()((theme) => {
  return{
    container: {
      marginBottom: theme.spacing(6),
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.8em',
      },
      fontWeight: 'bold',
    }
  }
})

const Home = () => {
  const { classes } = useStyles()

  return(
    <TemplateDefault>
      <Container maxWidth='md' className={classes.container}>
        <Typography component='h1' variant='h3' align='center' color='white' className={classes.title}>
          Conheça meus serviços
        </Typography>
      </Container>

      <Container maxWidth='md'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardInfo 
              title="Identidade Estratégica"
              text="Por meio de três reuniões vamos estruturar seu perfil e transformá-lo em um instagram autêntico, com personalidade. Nessas reuniões vamos definir uma identidade visual, branding, briefing e informações estratégicas para serem trabalhadas no seu perfil."
              image="/images/consultoria.svg"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <CardInfo 
                title="Gerenciamento Mensal"
                text="Planejamento de Marketing de Conteúdo alinhado com funil de vendas, calendário de conteúdos, design, edição de vídeos, roteiro de reels, sequência de stories personalizados, suporte via WhatsApp (dispnível de segunda à sexta, das 9:00 às 19:00)."
                image="/images/gerenciamento.svg"
            />
          </Grid>
        </Grid>
      </Container>                  
    </TemplateDefault>
  )
}

export default Home