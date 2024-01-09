import React from 'react'
import classes from './Offer.module.css'
import linkedin from '../../../public/Assets/Photos/linkedin.png'
import swag from '../../../public/Assets/Photos/swag.png'
import Image from 'next/image'


export default function Offer() {
  return (
    <div className={classes['Offer']}>
    <div className={classes['Offer-div']}>
        <div className={classes['Offer-left']}>
    <Image
    src={swag}
    className={classes['img-swag']}
    />
    <div className={classes['swag']}>
    <div className={classes['swag-box']}>
    <Image
    src={linkedin}
    className={classes['img-link']}
    />
    </div>
    </div>
        </div>
        <div className={classes['Offer-right']}>
        <h2 className={classes['heading']}>What do we offer</h2>
        <p className={classes['desc']}>
    We believe that everyone should have the opportunity to learn and grow, and we are dedicated to providing our members with the resources and support they need to achieve their goals.
    </p>
    <div className={classes['down']}>
        <div className={classes['tick-div']}>
        <div className={classes['tick']}>
      <div className={classes['symbol']}>  &#10004; </div><p className={classes['credits']}>MLSA swags</p>
        </div>
        <div className={classes['tick']}>
        <div className={classes['symbol']}>  &#10004; </div> <p className={classes['credits']}>LinkedIn Premium</p>
        </div>
        </div>
        <div className={classes['tick-div']}>
        <div className={classes['tick']}>
        <div className={classes['symbol']}>  &#10004; </div> <p className={classes['credits']}>Certificates</p>
        </div>
        <div className={classes['tick']}>
        <div className={classes['symbol']}>  &#10004; </div> <p className={classes['credits']}>lorem ipsum</p>
        </div>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}
