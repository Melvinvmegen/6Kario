import React from 'react'

const Button = (props) => {
  return (
    <div className={props.wrapperClass + " btn-contact"} onClick={props.modal} >
      <span>
        <a className={props.btnClass + " button"} id={props.id ? props.id : "sticky-hire-me"}
          title="hire-me" > {props.action ? props.action : "Contact"}</a>
      </span>
    </div>
  )
}

export default Button;
