"use client"

import Card from '@mui/material/Card';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation, Autoplay , Mousewheel, Keyboard} from "swiper/modules";
// import './styles.css';
// import { Pagination } from 'swiper/modules';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Eventbar.module.css'
import { Data } from '../../../public/Data';
import event from '../../../public/Assets/Photos/event1.png'
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';


export default function Eventbar() {
  return (
    <div className={classes['Eventbar']}>

<Fade direction="up" triggerOnce>
    <div className={classes['Upper']}>
    <div className={classes['Upper-head']}>

        <h2 className={classes['heading']}>Events</h2>
        <p className={classes['desc']}>Explore the dynamic range of events hosted by MLSA-UETT </p>
        </div>
<div>
        <button className={classes['see-btn']}>See all</button>
        </div>
    </div>
</Fade>
<Fade direction="up" triggerOnce>  
    
   
    <Swiper
       slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
   keyboard={true}
   loop={true}
        autoplay={{
         delay: 1200,   
        }}
        navigation={false}
        modules={[ Navigation,Pagination, Autoplay, Mousewheel, Keyboard]}
      
       
        className={classes['swiper']}
      
        // className="mySwiper"
      >
     
{ Data.Events.map( (item) => (<SwiperSlide className={classes['SwiperSlide']}><Card key={item.id} className={classes['card']} sx={{ background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
<CardMedia
  sx={{ height: '20rem' }}
  title="event"
>
<Image
src={item.img}
className={classes['img']}
/>
</CardMedia>
<CardContent sx={{paddingLeft:'0'}}>
  <Typography gutterBottom variant="h5" component="div" sx={{
      color:'#55B4F3',
      fontWeight:'600',
      lineHeight:'28px',
      fontSize:'2rem'
  }}>
  {item.name}
  </Typography>
  <Typography variant="body2" sx={{
      color:'#E0EFFE',
      fontWeight:'400',
      fontSize:'1.5rem',
      lineHeight:'2.25rem'

  }}>
    {item.desc}
  </Typography>
</CardContent>
{/* <CardActions  sx={{paddingLeft:'0'}}>
<button className={classes['btn']}>
Read more 	&#8594;
</button>
</CardActions> */}
</Card>
</SwiperSlide>))}
</Swiper>
<div className={classes['Card-sec']}>
{ Data.Events.map( (item) => (<Card key={item.id} className={classes['card']} sx={{ background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
<CardMedia
  sx={{ height: '20rem' }}
  title="event"
>
<Image
src={item.img}
className={classes['img']}
/>
</CardMedia>
<CardContent sx={{paddingLeft:'0'}}>
  <Typography gutterBottom variant="h5" component="div" sx={{
      color:'#55B4F3',
      fontWeight:'600',
      lineHeight:'28px',
      fontSize:'2rem'
  }}>
  {item.name}
  </Typography>
  <Typography variant="body2" sx={{
      color:'#E0EFFE',
      fontWeight:'400',
      fontSize:'1.5rem',
      lineHeight:'2.25rem'

  }}>
    {item.desc}
  </Typography>
</CardContent>

{/* <CardActions  sx={{paddingLeft:'0'}}>
<button className={classes['btn']}>
Read more 	&#8594;
</button>
</CardActions> */}
</Card>
))}
</div>
    {/* <Card className={classes['card']} sx={{ background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
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
    <Card className={classes['card']} sx={{ background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
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
    </Card> */}
  
    
   
   
    {/* </div> */}
    
</Fade>

    </div>
  )
}
