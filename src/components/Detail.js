import React, { useEffect, useState } from 'react';
import { Container, Typography, Stack, Box, Grid } from '@mui/material';
import {Card, CardContent,CardActionArea, CardMedia} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';




const Detail = () => {

  const [pokemonName, setPokemonName] = useState([]);
  const [pokemonData, setPokemonData] = useState({});


  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  useEffect(() => {


  const getPokemon = async () => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
      // toArray.push(response.data);
      setPokemonData({
        name: pokemonName,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats
      });
      console.log(response.data.moves)

      // setLoading(true);
    }catch(error){
      alert(error.message)
    }
    
  }
  getPokemon();
  },[pokemonName]);

  return (
    <Container maxWidth={false} disableGutters={true}>
        <Stack pt={3} pb={3} direction="row" justifyContent="center">
          <Box sx={{ bgcolor: '#cfe8fc', height: '100%'}}>

          <Grid container spacing={3} px={3} pt={3}>
            <Grid item>
              <Card sx={{ maxWidth: 1200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png`}
                    alt="Pokemon"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      Pokemon
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


          </Box>


        </Stack>



    </Container>

  )
}

export default Detail