import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Route } from 'react-router-dom'

const Navproduct = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product App
          </Typography>
          <Link to={'/'}><Button style={{color:'white'}}>Home</Button></Link>
          <Link to={'/addproduct'}><Button style={{color:'white'}}>Add Product</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navproduct