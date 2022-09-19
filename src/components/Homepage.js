import { Container, Typography, Stack, Pagination, Box, Grid } from '@mui/material';
import {Card, CardContent,CardActionArea, CardMedia} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Pokemon from '../assets/pokemon-test.png';
import axios from 'axios';


const Homepage = () => {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);


  useEffect(() => {
    getPokemons();
  },[])
  

  const getPokemons = async () => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=16&offset=${offset}`);
      setPokemons(response.data.results);
      setLoading(true);
    }catch(error){
      alert(error.message)
    }
    

  }

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };


  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100%'}}>
        <Typography pt={3} align='center' variant='h5'>Pokemon Challenge</Typography>

        <Grid container spacing={3} px={3} pt={3}>
        {loading && pokemons.map((pokemon)=>(

            <Grid item xs={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Pokemon}
                    alt={pokemon.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
        ))}

        </Grid>

        <Stack pt={3} pb={3} direction="row" justifyContent="center">
          <Pagination
           count={10} 
           variant="outlined" 
           color="primary"
           page={page}
           onChange={handleChange}
          />
        </Stack>
      </Box>
    </Container>

  )
}

export default Homepage