import { Box, Container, Grid } from '@mui/material';
import React from 'react'
import CardItem from './CardItem';

const Cardlist = ({ data }) => {
  console.log('data', data)
  data.map(item => console.log(item))
  return (
    <Container fixed sx={{ my: { xs: 2, sm: 4 } }}>
      <Grid
        container
        alignItems="stretch"
        rowSpacing={{ xs: 3, sm: 4, md: 5 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 4, sm: 8 }}
      >
        {data.map(item => (
          <Grid item key={item.id} xs={4}>
            <CardItem item={item} />
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}

export default Cardlist;