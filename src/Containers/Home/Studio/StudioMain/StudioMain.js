import React, { Fragment } from 'react';
import Content from '../../../../Components/Content/Content';
import Carousel from '../../../../Components/Carousel/Carousel';

const StudioMain = (props) => {
  return (
    <Fragment>
      <div className="flex">
        <div className="flex-left">
          <Content title={props.input1.title} text={props.input1.text} />
        </div>
        <div className="flex-right">
          <Carousel next={props.next} prev={props.prev} img={props.img} />
        </div>
      </div>
      <div className="flex">
        <div className="flex-left">
          <Carousel next={props.next} prev={props.prev} img={props.img} />
        </div>
        <div className="flex-right">
          <Content title={props.input1.title} text={props.input1.text} />
        </div>
      </div>
    </Fragment>
  )
}

export default StudioMain;
