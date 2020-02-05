import React, { Fragment } from 'react';

const LabelHeader = (props) => {
  return (
    <Fragment>
      <div>
        <h2 className="title-bold center"><a href="">{props.title}</a></h2>
        <p className="center">{props.text}</p>
      </div>
    </Fragment>
  )
}

export default LabelHeader;
