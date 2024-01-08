import React from "react";
import classes from './Footer.module.css'
import Image from "next/image";
import mlsa from '../../../public/Assets/Photos/mlsa-logo.png'
import { Box, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = ()=>{
    const pages = ['Home', 'Events', 'About Us', 'Contact'];

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //   };




return(
    <div className={classes['Footer']}>
<div className={classes['Upper']}>
<Image className={classes['image']} src={mlsa}/>

 <div className={classes['Menu']}>
 <Box sx={{ display:'flex' , flexDirection:'row' ,justifyContent:'center' , alignItems:'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#e1effd', marginLeft:"1rem" , display: 'block', fontSize:'1.5rem' }}
              >
                {page}
              </Button>
            ))}
          </Box>
       


</div>
<div className={classes['social']}>
<FacebookIcon sx={{ fontSize:'3.5rem' ,  color:'#55b4f3', cursor:'pointer'}} />
<InstagramIcon sx={{ fontSize:'3.5rem' , marginLeft:'2rem' , color:'#55b4f3', cursor:'pointer' }} />
<LinkedInIcon sx={{ fontSize:'3.5rem' , marginLeft:'2rem' , color:'#55b4f3' , cursor:'pointer' }} />
</div>

</div>
<div className={classes['line-div']}>
<hr className={classes['line']}></hr>
</div>
<div className={classes['Lower']}>

<div className={classes['Lower-link']}>

<a className={classes['link']}>Privacy Policy</a>
<a className={classes['link']}>Terms of Services</a>
<a className={classes['link']}>Cookie Settings</a>
</div>
</div>
    </div>
)
}
export default Footer;