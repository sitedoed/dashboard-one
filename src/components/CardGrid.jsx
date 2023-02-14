import { Grid } from '@mui/material'
import React from 'react'
import CardTemplate from './CardTemplate'

export default function CardGrid() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <CardTemplate />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardTemplate />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardTemplate />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardTemplate />
      </Grid>
    </Grid>
  )
}
