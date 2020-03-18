import React, { Fragment } from 'react';
import classes from "./ContentBlock.module.css"

const LabelHeader = (props) => {
  return (
    <div className={classes.Content}>
      <h3 className={props.align ? classes.ContentTitleLeft : classes.ContentTitleRight}><a href="">{props.title}</a></h3>
      <p className={props.align ? classes.ContentTitleLeft : classes.ContentTitleRight}>{props.text}</p>
    </div>
  )
}

export default LabelHeader;
