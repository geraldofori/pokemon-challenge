import { Container, Typography, Stack, Pagination } from '@mui/material'
import React from 'react'

const Homepage = () => {
  return (
    <Container maxWidth="sm">
        <Typography pt={3} align='center' variant='h5'>Pokemon Challenge</Typography>


      <Stack pt={3} direction="row" justifyContent="center">
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </Container>

  )
}

export default Homepage