"use client"
import React from 'react'
import classes from './Team.module.css'
// import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'

import { Data } from '../../../public/Data';
import { Fade } from 'react-awesome-reveal';

export default function Team() {
  return (
    <div className={classes['Team']}>
  <Fade direction="left" triggerOnce>   
    <div className={classes['Team-div']}>
    <div className={classes['Upper']}>
    <h2 className={classes['heading']}>
    Core Team
    </h2>
    <p className={classes['desc']}>Introducing the Faces Behind MLSA-UETT</p>
    </div>
{/* <div className={classes['Team-Sec']}>

</div> */}
{Data.teamMembers.map( (item) =>( <div key={item.id} className={classes['card']}>
<div className={classes['shape']}>
<Image 
src={item.img}
className={classes['image']}
/>
</div>
<h5 className={classes['name']}>{item.name}</h5>
<p className={classes['designation']}>{item.rank} </p>
</div>))}
{/* <div className={classes['card']}>
<div className={classes['shape']}>
<Image 
src={img}
className={classes['image']}
/>
</div>
<h5 className={classes['name']}>Hamza Shaukat</h5>
<p className={classes['designation']}>Lead</p>
</div>
<div className={classes['card']}>
<div className={classes['shape']}>
<Image 
src={hamza}
className={classes['image']}
/>
</div>
<h5 className={classes['name']}>Hamza Shaukat</h5>
<p className={classes['designation']}>Lead</p>
</div>
<div className={classes['card']}>
<div className={classes['shape']}>
<Image 
src={hamza}
className={classes['image']}
/>
</div>
<h5 className={classes['name']}>Hamza Shaukat</h5>
<p className={classes['designation']}>Lead</p>
</div>
<div className={classes['card']}>
<div className={classes['shape']}>
<Image 
src={hamza}
className={classes['image']}
/>
</div>
<h5 className={classes['name']}>Hamza Shaukat</h5>
<p className={classes['designation']}>Lead</p>
</div>
<div className={classes['card']}>
<div className={classes['shape']}>
<Image 
src={hamza}
className={classes['image']}
/>
</div>
<h5 className={classes['name']}>Hamza Shaukat</h5>
<p className={classes['designation']}>Lead</p>
</div> */}

    {/* <div className={classes['col-5']}>

          <div className={classes['shape']}>
          <Image src={img} alt='image' className={classes['headshot']} />
        </div>
        <h6 className={classes['name']}>Hamza Shaukat</h6>
            <h6 className={classes['designation']}>Lead</h6>
           
          </div> */}
    {/* <div className={classes['col-5']}>

          <div className={classes['shape']}>
          <Image src={img} alt='image' className={classes['headshot']} />
        </div>
        <h6 className={classes['name']}>Hamza Shaukat</h6>
            <h6 className={classes['designation']}>Lead</h6>
           
          </div>
    <div className={classes['col-5']}>

          <div className={classes['shape']}>
          <Image src={img} alt='image' className={classes['headshot']} />
        </div>
        <h6 className={classes['name']}>Hamza Shaukat</h6>
            <h6 className={classes['designation']}>Lead</h6>
           
          </div> */}



    {/* <Card className={classes['card']} sx={{ background:'transparent', display:'flex', flexDirection:'column', flexWrap:'wrap' }}>
<CardMedia
  sx={{ height: '100%' }}
  title="event"
>
<Image
// src={item.img}
src={Picture1}
/>
</CardMedia>
<CardContent sx={{paddingLeft:'0'}}>
  <Typography gutterBottom variant="h5" component="div" sx={{
      color:'#55B4F3',
      fontWeight:'600',
      lineHeight:'28px',
      fontSize:'2rem'
  }}>
hamza
  </Typography>
  <Typography variant="body2" sx={{
      color:'#E0EFFE',
      fontWeight:'400',
      fontSize:'1.5rem',
      lineHeight:'2.25rem'

  }}>
  lead
  </Typography>
</CardContent>
</Card> */}
</div>
<div className={classes['About-btn']}>
<button className={classes['btn']}>
  View Full Team	&#8594;
</button>
</div>
</Fade>
    </div>
  )
}
