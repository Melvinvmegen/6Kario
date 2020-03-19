import React, { Component, Fragment } from "react";
import Divider from "../../../Components/Divider/Divider";
import Map from "./Map/Map";
import classes from "./Contact.module.css";
import SideMap from "./SideMap/SideMap";
import Modal from "../../../Components/Modal/Modal";
import ContactForm from "../Contact/ContactForm/ContactForm";

class Contact extends Component {
  state = {
    visible: false
  }

  modalHandler = () => {
    this.setState({ visible: true })
  }

  modalClosing = () => {
    this.setState({ visible: false })
  }


  render() {
    return (
      <div className={classes.Contact}>
        <a href="/" id="Modal" className="section-anchor-first"> </a>
        <Modal show={this.state.visible} modalClosed={this.modalClosing} >
          <ContactForm show={this.state.visible} />
        </Modal>
        <Divider title="CONTACT" />
        <div className={classes.InnerContact}>
          <Map />
          <SideMap modal={this.modalHandler} />
        </div>
      </div>
    )
  }
}

export default Contact;

