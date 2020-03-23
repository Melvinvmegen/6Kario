import React from 'react'
import logoWhite from './6KLABELw.png'
import logo from './6KLABEL.png'
import classes from './Logo.module.css'

const Logo = (props) => {
  return (
    <div className={classes.LogoWrapper}>
      <img src={props.logo ? logo : logoWhite} alt="logo" className={props.footer ? classes.Logo : null} />
    </div>
  )
}

export default Logo
