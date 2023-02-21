import React, { useState, useEffect } from 'react';
import './TopBar.css';
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


export default function TopBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [topBarWidth, setTopBarWidth] = useState('100%');
  const [isTopBarCollapsed, setIsTopBarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setTopBarWidth(isSidebarOpen ? 'calc(100% - 240px)' : '100%');
      setIsTopBarCollapsed(!isSidebarOpen);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSidebarOpen]);

  return (
    <div className={`topbar ${isTopBarCollapsed ? 'topbar-collapsed' : 'topbar-expanded'}`} style={{ width: topBarWidth }}>
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