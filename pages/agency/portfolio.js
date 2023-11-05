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
        marginBottom: 20
      },
      title: {
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.8em',
        },
        fontWeight: 'bold',
      }
    }
})

const Portfolio = () => {
    const { classes } = useStyles()

    return(
        <TemplateDefault>
            <Container maxWidth='md' className={classes.container}>
                <Typography component='h1' variant='h3' align='center' color='white' className={classes.title}>
                    Meus trabalhos
                </Typography>
            </Container>

            <Container maxWidth='md'>
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
            </Container>
        </TemplateDefault>
    )
}

export default Portfolio