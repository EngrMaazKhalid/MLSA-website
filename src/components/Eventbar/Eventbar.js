import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Eventbar.module.css'

import event from '../../../public/Assets/Photos/event1.png'
import Image from 'next/image';


export default function Eventbar() {
  return (
    <div className={classes['Eventbar']}>


    <div className={classes['Upper']}>
    <div className={classes['Upper-head']}>

        <h2 className={classes['heading']}>Events</h2>
        <p className={classes['desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
<div>
        <button className={classes['see-btn']}>See all</button>
        </div>
    </div>
    <div className={classes['Card-sec']}>
   
    <Card sx={{ maxWidth: 365 , background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
      <CardMedia
        sx={{ height: '100%' }}
        title="event"
      >
      <Image
      src={event}
      />
      </CardMedia>
      <CardContent sx={{paddingLeft:'0'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{
            color:'#55B4F3',
            fontWeight:'600',
            lineHeight:'28px',
            fontSize:'2rem'
        }}>
       HactoberFest 23
        </Typography>
        <Typography variant="body2" sx={{
            color:'#E0EFFE',
            fontWeight:'400',
            fontSize:'1.5rem',
            lineHeight:'2.25rem'

        }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions  sx={{paddingLeft:'0'}}>
      <button className={classes['btn']}>
  Read more 	&#8594;
</button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 365 , background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
      <CardMedia
        sx={{ height: '100%' }}
        title="event"
      >
      <Image
      src={event}
      />
      </CardMedia>
      <CardContent sx={{paddingLeft:'0'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{
            color:'#55B4F3',
            fontWeight:'600',
            lineHeight:'28px',
            fontSize:'2rem'
        }}>
       HactoberFest 23
        </Typography>
        <Typography variant="body2" sx={{
            color:'#E0EFFE',
            fontWeight:'400',
            fontSize:'1.5rem',
            lineHeight:'2.25rem'

        }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions  sx={{paddingLeft:'0'}}>
      <button className={classes['btn']}>
  Read more 	&#8594;
</button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 365 , background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
      <CardMedia
        sx={{ height: '100%' }}
        title="event"
      >
      <Image
      src={event}
      />
      </CardMedia>
      <CardContent sx={{paddingLeft:'0'}}>
        <Typography gutterBottom variant="h5" component="div" sx={{
            color:'#55B4F3',
            fontWeight:'600',
            lineHeight:'28px',
            fontSize:'2rem'
        }}>
       HactoberFest 23
        </Typography>
        <Typography variant="body2" sx={{
            color:'#E0EFFE',
            fontWeight:'400',
            fontSize:'1.5rem',
            lineHeight:'2.25rem'

        }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions  sx={{paddingLeft:'0'}}>
      <button className={classes['btn']}>
  Read more 	&#8594;
</button>
      </CardActions>
    </Card>
    
   
   
    </div>


    </div>
  )
}
