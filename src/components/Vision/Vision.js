import React from 'react'
import classes from './Vision.module.css'
export default function Vision() {
  return (
    <div className={classes['Vision']}>
    <div className={classes['Vision-div']}>
       <div className={classes['Vision-left']}>
        <div className={classes['Vision-main']}>
    <h2 className={classes['heading']}>Our vision</h2>
    <p className={classes['desc']}>
    We are a technical society that empowers students who are passionate about Microsoft technologies to solve real-world problems and make a positive impact on the world.
    </p>
        </div>
        <div className={classes['Vision-main']}>
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
    
                <div className={classes['number']}>1</div>
                <div className={classes['box-heading']}>Fostering an Inclusive Community for MLSA</div>

            </div>
            <div className={classes['box']}>
    
                <div className={classes['number']}>1</div>
                <div className={classes['box-heading']}>Commitment to Produce</div>

            </div>
        </div>

    </div>

    </div>
  )
}

{/* <div className={classes['box-heading']}>Commitment to Produce</div>
                <div className={classes['box-heading']}>Opportunity to Learn.</div>
                <div className={classes['box-heading']}>Fostering an Inclusive Community for MLSA</div> */}
