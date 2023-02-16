import { Box, Button, Grid, Paper } from '@mui/material';
import React from 'react';
import Layout from '../components/Layout';
import './Contact.css';

export default function Contact() {
  return (
    <Layout >
        <Box className="contactform" >
            <h1>Contato</h1>
            <Paper>
                <Grid container>
                    <Grid item xs={6}>
                        <input type="text" name="nome" placeholder='Nome'/>
                    </Grid>
                    <Grid item xs={6}>
                        <input type="text" name="email" placeholder='E-mail' />
                    </Grid>
                    <Grid item xs={4}>
                        <input type="text" name="ddd" placeholder='DDD' />
                    </Grid>
                    <Grid item xs={8}>
                        <input type="text" name="celular" placeholder='Celular' />
                    </Grid>
                    <Grid xs={12}>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            placeholder='Mensagem'
                            rows={4}
                            cols={100}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained">Enviar</Button>
            </Paper>
        </Box>
    </Layout>
  )
}
