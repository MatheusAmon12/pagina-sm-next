import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { makeStyles } from 'tss-react/mui'



const useStyles = makeStyles()((theme) => {
    return{
        cardBackground: {
            background: 'white',
            borderRs: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(7.7px)',
            border: '1px solid rgba(225, 138, 212, 0.06)',
            borderRadius: 5,
            height: '350px',
            boxShadow: '10px 10px 25px -7px rgba(0,0,0,0.75)',
        },
        text: {
            fontSize: '14px',
            lineHeight: '24px',
            
        },
        title: {
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'black',
        }
    }
})

const CardInfo = ({ title, text, image}) => {
  const { classes } = useStyles()

  return (
    <Card sx={{ maxWidth: '250px' }} className={classes.cardBackground}>
        <CardMedia
            component="img"
            height="150"
            image={image}
            alt={title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" className={classes.title}>
                {title}
            </Typography>
            <Typography component="p" variant="p" color="text.primary" className={classes.text}>
                {text}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default CardInfo