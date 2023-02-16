import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Layout.css';


export default function Layout(props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={2}>
                    <Sidebar  isOpen={isSidebarOpen} onToggle={handleSidebarToggle}/>
                </Grid>
                <Grid item xs={6} md={10} className={`content ${isSidebarOpen ? 'content-expanded' : 'content-collapsed'}`}>
                    <TopBar />
                    <div className='main-content'>
                      {props.children}
                    </div>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}
