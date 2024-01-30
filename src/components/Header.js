import * as React from 'react'
import { 
    AppBar, 
    Box,
    Toolbar,
    Typography,
    Button,
    Container,
} from '@mui/material'
import Link from 'next/link'
import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => {
  return{
    button: {
      textDecoration: 'none !important',
      fontWeight: 'bold',
    },
    toolbar: {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column',
      }
    },
    container: {
      [theme.breakpoints.down('sm')]: {
        padding: '15px',
      }
    }
  }
})

export default function ButtonAppBar({color}) {
  const { classes } = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
        <Container maxWidth='lg' className={classes.container}>
            <Toolbar className={classes.toolbar}>
                <Typography color={color} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Agência LM
                </Typography>
                <Box>
                  <Link href='/'>
                    <Button color="inherit">
                      <Typography color={color} className={classes.button}>Home</Typography>
                    </Button>
                  </Link>
                  <Link  href='/agency/portfolio'>
                    <Button color="inherit">
                      <Typography color={color}  className={classes.button}>Portfolio</Typography>
                    </Button>
                  </Link>
                  <Link  href='/agency/about'>
                    <Button color="inherit">
                      <Typography color={color}  className={classes.button}>Sobre</Typography>
                    </Button>
                  </Link>
                  <Link  href='/agency/contacts'>
                    <Button color="inherit">
                      <Typography color={color}  className={classes.button}>Contatos</Typography>
                    </Button>
                  </Link>
                </Box>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}