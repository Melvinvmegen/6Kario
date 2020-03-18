import React, { Component, Fragment } from "react";
import Divider from "../../../Components/Divider/Divider";
import Map from "./Map/Map";
import classes from "./Contact.module.css";


class Contact extends Component {

  render() {
    return (
      <div className={classes.Contact}>
        <Divider title="Contact" />
        <Map />
      </div>
    )
  }
}

export default Contact;

