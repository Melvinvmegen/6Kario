import React, { Component } from "react";
import Label from "./Label/Label";
import classes from './Home.module.css'
import Studio from "./Studio/Studio";
import Contact from "./Contact/Contact";

class Home extends Component {
  render() {
    return (
      <div className={classes.SectionMain}>
        <Label />
        <Studio />
        <Contact />
      </div>
    )
  }
}

export default Home;

