import React, { Fragment } from 'react';
import Content from '../../../../Components/ContentBlock/ContentBlock';
import Carousel from '../../../../Components/Carousel/Carousel';
import classes from './StudioMain.module.css'

const StudioMain = (props) => {
  return (
    <Fragment>
      <div className={classes.Studio}>
        <div className={classes.StudioLeft}>
          <Content title={props.input1.title} text={props.input1.text} align />
        </div>
        <div className={classes.StudioRight}>
          <Carousel next={props.next} prev={props.prev} img={props.img} />
        </div>
      </div>
      <div className={classes.Studio}>
        <div className={classes.StudioLeft}>
          <Carousel next={props.next} prev={props.prev} img={props.img} />
        </div>
        <div className={classes.StudioRight}>
          <Content title={props.input1.title} text={props.input1.text} />
        </div>
      </div>
    </Fragment>
  )
}

export default StudioMain;
