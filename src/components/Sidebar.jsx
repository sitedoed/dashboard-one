import React, { useState } from 'react';
import './Sidebar.css';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
    <>
        
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className='sidebar-toggle-btn' onClick={toggleSidebar}>Click</button>
         Sidebar
        </div>
    </>
  )
}
