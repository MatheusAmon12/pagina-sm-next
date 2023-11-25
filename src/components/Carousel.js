import { useState, useEffect, useRef } from 'react'
import { Box, Typography} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { motion } from 'framer-motion'

const useStyles = makeStyles()((theme) => {
  return{
    carousel: {
      cursor: 'grab',
      pointerEvents: 'grabing',
      overflow: 'hidden',

    },
    inner: {
      display: 'flex',
    },
    item: {
        minHeight: '312.5px',
        minWidth: '250px',
    },
    img: {
      display: 'block',
      margin: '0 auto',
      width: 'auto',
      height: '312.5px',
      pointerEvents: 'none',
      overflow: 'hidden',
      borderRadius: '5px',
    }
  }
})

const Carousel = ({ title, images, alt }) => {
    const { classes } = useStyles()
    const carousel = useRef()
    const [width, setWidth] = useState(0)
  
    useEffect(() => {
      console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])
  
    return(
        <Box style={{maxWidth: '250px'}}>
            <Typography component='p' align='center' color={'primary'} fontWeight={'bold'}>
                {title}
            </Typography>
            <motion.div className={classes.carousel} whileTap={{cursor: 'grabbing'}} ref={carousel}>
              <motion.div className={classes.inner} drag='x' dragConstraints={{right: 0, left: -width}}>
                  {
                  images.map(image => (
                      <motion.div key={image.src} className={classes.item}>
                        <img src={image.src} alt='Insights instagram' className={classes.img}/>
                      </motion.div>
                  ))
                  }

              </motion.div>
            </motion.div>
        </Box>
    )
}
  
export default Carousel