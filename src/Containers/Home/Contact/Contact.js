import React, { Component, Fragment } from "react";
import Divider from "../../../Components/Divider/Divider";
import ContactForm from "./ContactForm/ContactForm";
import Map from "./Map/Map";


class Contact extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <Divider />
        <ContactForm />
        <Map />
      </Fragment>
    )
  }
}

export default Contact;

