import React from 'react';
import classes from './Divider.module.css'

const Divider = (props) => {
  return (
    <div>
      <h1 className={classes.DividerTitle}>{props.title}</h1>
    </div>
  )
}

export default Divider;
