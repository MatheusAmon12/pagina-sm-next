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
    buttonColor: {
      color:'white',
      textDecoration: 'none !important'
    }
  }
})

export default function ButtonAppBar() {
  const { classes } = useStyles()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth='lg'>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Agência LM
                </Typography>
                <Link href='/'>
                  <Button color="inherit">
                    <Typography className={classes.buttonColor}>Home</Typography>
                  </Button>
                </Link>
                <Link  href='/agency/portfolio'>
                  <Button color="inherit">
                    <Typography  className={classes.buttonColor}>Portfolio</Typography>
                  </Button>
                </Link>
                <Link  href='/agency/about'>
                  <Button color="inherit">
                    <Typography  className={classes.buttonColor}>Sobre</Typography>
                  </Button>
                </Link>
                <Link  href='/agency/contacts'>
                  <Button color="inherit">
                    <Typography  className={classes.buttonColor}>Contatos</Typography>
                  </Button>
                </Link>
            </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}