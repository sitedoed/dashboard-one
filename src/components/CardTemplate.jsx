import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import './CardTemplate.css';

export default function CardTemplate(props) {
  console.log(props)
  return (

    <Card>
      <CardMedia
        title="Imagem do card"
        className={props.className}
        style={{ height: 140 }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
  )
}
