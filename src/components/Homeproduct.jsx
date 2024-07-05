import { Button, Card, CardActions, CardContent, CardMedia, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Homeproduct = () => {
    const[rows,setRows]=useState([])

    useEffect(()=>{
      axios.get('https://fakestoreapi.com/products').then((res)=>{
        console.log(res);
        setRows(res.data)
      })
    })
  return (
    <Box sx={{ width: '100%' }}>
      <Grid style={{margin:'5%'}}container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {rows.map((item)=>(
          <Grid item xs={6}>
          <Card style={{backgroundColor:'#FFF8F3'}}sx={{ maxWidth: 345 }}>
        <CardMedia
          style={{objectFit:'scale-down'}}
          sx={{ height: 140 }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
        <Typography variant="body1" color="text.secondary">
            {item.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${item.price}
          </Typography>
          <Typography gutterBottom variant="body3" component="div">
            Category: {item.category}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="outlined">Add to Cart</Button>
          <Button size="small" variant="contained">Buy</Button>
        </CardActions>
      </Card>
          </Grid>
        ))}
        
      </Grid>
    </Box>
  )
}

export default Homeproduct