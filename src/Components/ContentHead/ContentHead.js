import React from 'react';
import classes from "./ContentHead.module.css"

const LabelHeader = (props) => {
  return (
    <div className={classes.Content}>
      <img src="" alt="Disque" className={classes.ContentImage} />
      <h2 className={classes.ContentTitle}><a href="">{props.title}</a></h2>
      <p className={classes.ContentText}>{props.text}</p>
    </div>
  )
}

export default LabelHeader;
