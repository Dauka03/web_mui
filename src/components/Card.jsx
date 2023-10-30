import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({src}) {
  return (
    <Card style={{marginRight:'20px', marginBottom:'20px'}} sx={{ maxWidth: 231 }}>
      
      <CardActionArea>
        <Link to={'/photo'}>
          
        <CardMedia
          component="img"
          height="342"
          image={src}
          alt="green iguana"
        />
        
        </Link>
        
       
      </CardActionArea>
    </Card>
  );
}