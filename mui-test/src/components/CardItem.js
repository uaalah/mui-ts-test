import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { styled } from '@mui/system';
import React from 'react'

const Image = styled('img')(({ theme }) => ({
  display: 'block',
  height: '100%',
  objectFit: 'cover',
}))

const CardItem = ({ item }) => {
  const {
    category,
    description,
    image,
    price,
    rating,
    title
  } = item;
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        title={title}
        subheader={category}
      />
      {/* {<CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />} */}
      <Box sx={{ height: { xs: '10rem', md: '20rem' }, backgroundColor: '#fff', my: 4, py: 2 }}>
        <Image src={image} alt={title} sx={{ mx: 'auto' }} />
      </Box>

      <CardContent>
        <Typography>
          {description}
        </Typography>
        <p>{price}</p>
      </CardContent>
    </Card>
  )
}

export default CardItem