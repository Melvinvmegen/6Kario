import React from 'react';
import Content from '../../../../Components/Content/Content';

const LabelMain = (props) => {
  return (
    <div className="flex">
      <div className="flex-left">
        <Content title={props.input1.title} text={props.input1.text} />
      </div>
      <div className="flex-right">
        <Content title={props.input2.title} text={props.input2.text} />
      </div>
    </div>
  )
}

export default LabelMain;
