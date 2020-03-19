import React from 'react';
import classes from './SideMap.module.css';
import Button from '../../../../Components/Button/Button';

const SideMap = (props) => {
  return (
    <div className={classes.SideMap}>
      <h2 className={classes.SideMapTitle}>Prenons contact</h2>
      <p className={classes.SideMapText}> Vous souhaitez nous contacter pour obtenir plus d'informations, prendre rendez-vous ?</p>
      <Button action="Contactez-nous" modal={props.modal} wrapperClass="btn-sidemap" ></Button>
    </div>
  )
}

export default SideMap;
