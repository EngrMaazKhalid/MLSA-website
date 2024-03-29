'use client'
import React from "react";
import classes from './About.module.css'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from "@mui/system";
import Picture1 from '../../../public/Assets/Photos/Picture1.png'


import dynamic from "next/dynamic";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const About =() =>{

 return(
   
   <div className={classes['About']}>  
   <Fade direction="up" triggerOnce>
    <div className={classes['About-div']}>
    <div className={classes['About-img']}>
        {/* <div className={classes['img']} /> */}
       
        <Image 
        src={Picture1}
        className={classes['img']}
        />
      
    </div>
    <div className={classes['About-main']}>
    <h2 className={classes['About-heading']}>
        About MLSA UET
    </h2>
    <div className={classes['About-des']}>
        <p className={classes['para']}>Welcome to the MLSA UETT, where passion for technology meets a commitment to personal and collective growth. We are a community of students dedicated to exploring the vast potential of Microsoft technologies, empowering ourselves and others to make a meaningful impact on the world.</p>
        <p className={classes['para']}>Our purpose as the MLSA society is to establish a collaborative presence within UET Taxila. This enables Ambassadors selected directly from Microsoft to work together and collaborate for the betterment of the local community. This collective effort empowers ambassadors to achieve tasks that may be challenging with solo participation, unlocking new possibilities as a united team ...”</p>
    </div>
<div className={classes['About-btn']}>
<button className={classes['btn']}>
  Read more 	&#8594;
</button>
</div>
    </div>

 </div>
 </Fade>
   </div>

 )
}
export default dynamic (() => Promise.resolve(About), {ssr: false})

// export default About