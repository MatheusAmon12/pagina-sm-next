import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles()((theme) => {
    return {
      container: {
        padding: theme.spacing(8, 0, 30),
        backgroundImage: 'url(../images/backgroundHome.jpg)',
        backgroundSize: 'cover',
        height: '100%',
      }
    }
 })

const Default = ({ children }) => {
    const { classes } = useStyles()

    return(
        <>
            <Header />
            <Box className={classes.container}>
                { children }
            </Box>
            <Footer />
        </>
    )
}

export default Default