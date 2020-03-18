import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import classes from "./Nav.module.css"
import NavItem from './NavItem/NavItem';
import Logo from '../../../Components/Logo/Logo';
import Button from '../../../Components/Button/Button';
import Modal from "../../../Components/Modal/Modal";
import ContactForm from "../../Home/Contact/ContactForm/ContactForm";


class Nav extends Component {
  state = {
    links: [
      { id: 1, name: 'News' },
      { id: 2, name: 'Label' },
      { id: 3, name: 'Studio' },
    ],
    show: false,
    visible: false,
    action: "Contact"
  }

  toggleMenu = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow })
  }

  modalHandler = () => {
    this.setState({ visible: true })
  }

  modalClosing = () => {
    this.setState({ visible: false })
  }

  render() {
    return (
      <div className={classes.MainHeaderCenter}>
        {this.state.visible ? <Modal show={this.state.visible} modalClosed={this.modalClosing} >
          <ContactForm show={this.state.visible} modalClosed={this.modalClosing} />
        </Modal> : null}
        <Breakpoint large up className={classes.NavMenu}>
          <NavItem link={this.state.links[0]} />
          <NavItem link={this.state.links[1]} />
          <Logo />
          <NavItem link={this.state.links[2]} />
          <Button action={this.state.action} modal={this.modalHandler} />
        </Breakpoint>
        <Breakpoint medium down className="nav-menu-mobile">
          <NavItem link={this.state.links[0]} />
          <NavItem link={this.state.links[1]} />
          <NavItem link={this.state.links[2]} />
        </Breakpoint>
      </div>
    )
  }
}

export default Nav;
