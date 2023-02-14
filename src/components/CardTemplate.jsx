import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function CardTemplate() {
  return (
    <Card>
      <CardMedia
        image="https://source.unsplash.com/random"
        title="Imagem do card"
        style={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Título do card
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Descrição do card
        </Typography>
      </CardContent>
    </Card>
  )
}
