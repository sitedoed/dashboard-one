import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Layout.css';

export default function Layout(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout">
      <div className="sidebar-container" style={{ flex: isSidebarOpen ? '1 1 16.666%' : '0 0 0' }}>
        <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      </div>
      <div className="main-container" style={{ flex: isSidebarOpen ? '1 1 83.334%' : '1 1 100%' }}>
        <TopBar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
        <div className='main-content'>
          {props.children}
        </div>
      </div>
    </div>
  );
}
