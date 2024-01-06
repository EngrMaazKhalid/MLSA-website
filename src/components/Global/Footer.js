import React from "react";
import classes from './Footer.module.css'
import Image from "next/image";
import mlsa from '../../../public/Assets/Photos/mlsa-logo.png'
import { Box, Button } from "@mui/material";


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
 <Box sx={{ display:'flex' , flexDirection:'row' ,justifyContent:'space-between' }}>
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#e1effd', marginLeft:"1rem" , display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
</div>
<div className={classes['social']}>

</div>

</div>
<hr className={classes['line']}></hr>
<div className={classes['Lower']}>

</div>
    </div>
)
}
export default Footer;