"use client"
import React from 'react'

import classes from './Contact.module.css'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { Fade } from 'react-awesome-reveal';



export default function Contact() {
  return (
    <Fade direction="up" triggerOnce>  
    <div className={classes['Contact']}>
  
<div className={classes['Contact-div']}>
    <div className={classes['Upper']}>
    <h2 className={classes['heading']}>Get in Touch</h2>
        <p className={classes['desc']}>Have something to share with us?<br /> Or looking for a potential collaboration?<br />  Get in touch with the minds behind MLSA-UET. </p>
        
</div>
<div className={classes['Contact-down']}>
<div className={classes['Contact-left']}>
<div  className={classes['box']}>

<MailIcon sx={{fontSize:'2.3rem'}} className={classes['number']} />
<a href='mailto:mlsauettaxila@gmail.com'>
    <div className={classes['box-heading']}>mlsauettaxila@gmail.com</div>
</a>
</div>
<div  className={classes['box']}>

<PhoneIcon sx={{fontSize:'2.3rem'}}  className={classes['number']} />

    <div className={classes['box-heading']}>+92 304 4197010</div>

</div>
<div  className={classes['box']}>

<LocationOnIcon  sx={{fontSize:'2.3rem'}}  className={classes['number']} />

    <div className={classes['box-heading']}>UET Taxila</div>

</div>

</div>
<div className={classes['Contact-right']}>
<form className={classes['Contact-form']}>
<div className={classes['Form-bar']}>
<div className={classes['Form-group']}>
<label className={classes['Form-label']}> First Name </label>
    <input type='name' name='name' id='name' className={classes['Form-input']} />

</div>
<div className={classes['Form-group']}>
<label className={classes['Form-label']}>Email</label>
    <input type='email' name='email' id='email' className={classes['Form-input']} />

</div>

</div>
<div className={classes['Form-bar']}>
<div className={classes['Form-group1']}>
<label className={classes['Form-label']}>Message</label>
    <input type='text' name='message' id='message' className={classes['Form-input']} />

</div>
</div>
<div className={classes['Form-bar2']}>
<button className={classes['btn']}>
 Send	<SendIcon sx={{fontSize:'2.3rem'}}/>
</button>
</div>

</form>
</div>
</div>
</div>


    </div>
</Fade>
  )
}
