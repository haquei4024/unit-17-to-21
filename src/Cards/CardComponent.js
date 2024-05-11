import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import './CardComponent.css'

export const CardComponent = (props) => {
  return (
    <Card sx={{ maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          width="380"
          image={props.img}
          alt={props.alt}
        />
        <CardContent>
            <h2 className='Article'>
              {props.title}
            </h2>
            <p className='Author'>
              {props.author}
            </p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
