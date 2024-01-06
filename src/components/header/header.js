import React from "react";
import classes from './Header.module.css'
const Header =() =>{


    return(
        <div className={classes['Header']}>

        <div className={classes['Header-div']}>
            <h1 className={classes['main-heading']}>
Microsoft Learn Student Ambassador <br /> UET Taxila
            </h1>
            <div className={classes['description']}>
            Building a more connected and collaborative tech community. Bridging the gap between technology and society.
            </div>
        </div>

        </div>
    )
}
export default Header