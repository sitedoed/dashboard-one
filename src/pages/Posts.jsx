import React from 'react';
import DataTable from '../components/DataTable';
import Layout from '../components/Layout';
import TinyEditor from '../components/TinyEditor';
import TextField from '@mui/material/TextField';
import './Posts.css';

export default function Posts() {
  return (
    <Layout>
      <h1>POSTS</h1>
      <div className='posts-container'>
        <div className='posts-component'>
          <TextField fullWidth label="Titulo" name="name" id="fullWidth" className='posts-component' />
        </div>
        <div className='posts-component'>
          <TinyEditor />
        </div>
        <div className='posts-component'>
          <DataTable />
        </div>
      </div>
    </Layout>
  )
}
