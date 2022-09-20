import React, { useEffect, useState } from 'react';
import { Container, Typography, Stack, Box, Grid } from '@mui/material';
import {Card, CardContent,CardActionArea, CardMedia} from '@mui/material';
import axios from 'axios';
import {useParams} from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';




const Detail = () => {
  // const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(true);

  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type:""
  });


  let {name} = useParams();  


  useEffect(() => {

  const getPokemon = async () => {
    try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemonData({
        name: name,
        species: response.data.species.name,
        img: response.data.sprites.front_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name
      });

      // setLoading(true);
    }catch(error){
      alert(error.message)
    }
    
  }
  getPokemon();
  },[name,pokemonData]);


  const handleClick = () => {
    setOpen(!open);
  };




  return (
    <Container maxWidth={false} disableGutters={true}>
        <Stack pt={3} pb={3} direction="row" justifyContent="center">
          <Box sx={{ bgcolor: '#cfe8fc', height: '100%'}}>
            
          <Grid container spacing={3} px={3} py={3}>
            <Grid item>
              <Card sx={{ maxWidth: 1200 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`${pokemonData.img}`}
                    alt="Pokemon"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                      {pokemonData.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>


          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Details
              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'green', height: '100%'}} primary={`Species `} />
              {open ? <ExpandLess /> : <ExpandMore />}

            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={`${pokemonData.species}`} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'green', height: '100%'}} primary="Hp" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={`${pokemonData.hp}`} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'green', height: '100%'}} primary="Type" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={`${pokemonData.type}`} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'green', height: '100%'}} primary="Defense" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={`${pokemonData.defense}`} />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
               <SendIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: 'green', height: '100%'}} primary="Attack" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={`${pokemonData.attack}`} />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
    


          </Box>


        </Stack>



    </Container>

  )
}

export default Detail