"use client"
import React from 'react'
import classes from './Vision.module.css'
import { Fade } from 'react-awesome-reveal'
export default function Vision() {
  return (
    <div className={classes['Vision']}>
    <Fade direction="left" triggerOnce> 
    <div className={classes['Vision-div']}>
    
       <div className={classes['Vision-left']}>
        <div className={classes['Vision-main']}>
    <h2 className={classes['heading']}>Our vision</h2>
    <p className={classes['desc']}>
    Our vision at MLSA is to create a collaborative presence in UET Taxila, fostering teamwork among Ambassadors selected directly from Microsoft. Together, we strive for the betterment of the local community, enabling ambassadors to achieve more collectively than they could individually.  </p>
        </div>
        <div className={classes['Vision-main1']}>
    <h2 className={classes['heading']}>Our Mission</h2>
    <p className={classes['desc']}>
    We believe that everyone should have the opportunity to learn and grow, and we are dedicated to providing our members with the resources and support they need to achieve their goals.
    </p>
        </div>
        </div>
        
        <div className={classes['box-div']}>
            <div className={classes['box']}>
    
                <div className={classes['number']}>1</div>
                <div className={classes['box-heading']}>Opportunity to Learn</div>

            </div>
            <div className={classes['box']}>
    
                <div className={classes['number']}>2</div>
                <div className={classes['box-heading']}>Fostering an Inclusive Community for MLSA</div>

            </div>
            <div className={classes['box']}>
    
                <div className={classes['number']}>3</div>
                <div className={classes['box-heading']}>Commitment to Produce</div>

            </div>
        </div>

    </div>
</Fade>
    </div>
  )
}

{/* <div className={classes['box-heading']}>Commitment to Produce</div>
                <div className={classes['box-heading']}>Opportunity to Learn.</div>
                <div className={classes['box-heading']}>Fostering an Inclusive Community for MLSA</div> */}
