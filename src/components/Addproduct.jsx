import { Box, TextField } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Product Name"
          multiline
          maxRows={4}
        />
        </div>
        <div>
        <TextField
          id="outlined-textarea"
          label="Category"
          placeholder="Placeholder"
          multiline
        />
        </div>
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Price"
          multiline
          maxRows={4}
        />
        </div>
        </Box>
  )
}

export default Addproduct