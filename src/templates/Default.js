import { Box, Container } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import Footer from '../components/Footer'

const useStyles = makeStyles()((theme) => {
    return {
      container: {
        backgroundColor: theme.palette.background.default,
      }
    }
 })

const Default = ({ children }) => {
    const { classes } = useStyles()

    return(
        <>
            <Container maxWidth={`100vw`} className={classes.container} disableGutters>
                { children }
            </Container>
            <Footer />
        </>
    )
}

export default Default