import React, { Fragment } from 'react';

const LabelHeader = (props) => {
  return (
    <Fragment>
      <div>
        <h3 className="title-bold center"><a href="">{props.title}</a></h3>
          <p className="center">{props.text}</p>
        </div>
    </Fragment>
  )
}

export default LabelHeader;
