import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchInput() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
      style={{border:'gray 2px solid' , width:'240px', marginTop:'20px', borderRadius:'25%'}}
        id="free-solo-demo"
        freeSolo
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      
    </Stack>
  );
}

