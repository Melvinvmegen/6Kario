import React from 'react';
import Content from '../../../../Components/ContentBlock/ContentBlock';
import classes from './LabelMain.module.css'

const LabelMain = (props) => {
  return (
    <div className={classes.Label}>
      <div className={classes.LabelLeft}>
        <Content title={props.input1.title} text={props.input1.text} />
      </div>
      <div className={classes.LabelRight}>
        <Content title={props.input2.title} text={props.input2.text} align />
      </div>
    </div>
  )
}

export default LabelMain;
