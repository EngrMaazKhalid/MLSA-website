import React from "react";
import classes from './Header.module.css'
// import classes from './About.module.css'
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { Button } from "@mui/material";

const Header =() =>{


    return(
    <>  <div className={classes['Header']}>

        <div className={classes['Header-div']}>
            <h1 className={classes['main-heading']}>
Microsoft Learn Student Ambassador <br /> UET Taxila
            </h1>
            <div className={classes['description']}>
            Building a more connected and collaborative tech community. Bridging the gap between technology and society.
            </div>
        </div>

        </div>
        {/* <div className={classes['About']}>  
    <div className={classes['About-div']}>
    <div className={classes['About-img']}>
        <div className={classes['img']} />
    </div>
    <div className={classes['About-main']}>
    <h2 className={classes['About-heading']}>
        About MLSA UET
    </h2>
    <div className={classes['About-des']}>
        <p>Welcome to the MLSA UETT, where passion for technology meets a commitment to personal and collective growth. We are a community of students dedicated to exploring the vast potential of Microsoft technologies, empowering ourselves and others to make a meaningful impact on the world.</p>
        <p>Together, we foster a welcoming and inclusive environment where diversity and inclusion are celebrated ...</p>
    </div>
<div className={classes['About-btn']}>
<Button variant="outlined" endIcon={<ArrowRightAltIcon />}>
  Read more
</Button>
</div>
    </div>

 </div>

   </div> */}
      </>  
    )
}
export default Header