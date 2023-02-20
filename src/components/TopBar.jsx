import React from 'react';
import './TopBar.css';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function TopBar() {
  return (
    <div className='topbar'>
      <div className="search-container" style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
        <FormControl sx={{ m: 1, width: '100%', maxWidth: '50ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Pesquisar</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            className='topbar-search-input'
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            label="Pesquisar"
          />
        </FormControl>
      </div>
    </div>

  )
}
