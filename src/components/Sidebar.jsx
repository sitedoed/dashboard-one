import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import seulogo from '../assets/images/seu-logo1.png';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BookIcon from '@mui/icons-material/Book';

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    return (
    <>    
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <a href='/'><img src={seulogo} alt="seu logo" /></a>
          <button className='sidebar-toggle-btn' onClick={toggleSidebar}>Click</button>
          <nav>
            <ul>
              <li><Link to={'/'}><HomeIcon />Home</Link></li>
              <li><Link to={'/contato'}><ContactMailIcon />Contato</Link></li>
              <li><Link to={'/projeto'}><DashboardIcon />Projeto</Link></li>
              <li><Link to={'/graficos'}><InsertChartIcon />Gráficos</Link></li>
              <li><Link to={'/documentacao'}><InsertChartIcon />Documentação</Link></li>
              <li><Link to={'/posts'}><BookIcon />Posts</Link></li>
              <li><a href="https://dashboard-one-react.netlify.app/" target='_blank' rel="noreferrer"><OpenInNewIcon />Netlify</a></li>
            </ul>
          </nav>
        </div>
    </>
  )
}
