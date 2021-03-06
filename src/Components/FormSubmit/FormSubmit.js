import React from 'react'

const FormSubmit = (props) => {
  return (
    <div className={props.wrapperClass + " header-hire-me"} >
      <button className={props.btnClass} id={props.id} type="submit" disabled={!props.formIsValid}> {props.action ? props.action : "► Prendre contact"}</button>
    </div>
  )
}

export default FormSubmit;
