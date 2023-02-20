import { Grid } from '@mui/material'
import React from 'react'
import CardTemplate from './CardTemplate'

export default function CardGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <CardTemplate className="success" title="Parabéns" desc="Tarefas bem sucessidadas"/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTemplate className="warning" title="Pendências" desc="Tarefas Pendentes"/>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTemplate className="danger" title="Perigo" desc="Tarefas que precisam de mais atenção"/>
      </Grid>
    </Grid>
  )
}
