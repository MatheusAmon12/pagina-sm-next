import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

const AvatarImage = ({ title, image, width, height }) => {
    return(
        <Stack>
            <Avatar alt={title} src={image} sx={{ width: {width}, height: {height} }}/>
        </Stack>
    )
}

export default AvatarImage