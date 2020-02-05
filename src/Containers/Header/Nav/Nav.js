import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import classes from "./Nav.module.css"
import NavItem from './NavItem/NavItem';
import Logo from '../../../Components/Logo/Logo';
import Button from '../../../Components/Button/Button';

class Nav extends Component {
  state = {
    links: [
      { id: 1, name: 'News' },
      { id: 2, name: 'Label' },
      { id: 3, name: 'Studio' },
    ]
  }

  render() {
    return (
      <div className={classes.MainHeaderCenter}>
        <Breakpoint large up className={classes.NavMenu}>
          <NavItem link={this.state.links[0]}/>
          <NavItem link={this.state.links[1]}/>
          <Logo />
          <NavItem link={this.state.links[2]}/>
          <Button />
        </Breakpoint>
        <Breakpoint medium down className="nav-menu-mobile">
          <NavItem link={this.state.links[0]} />
          <NavItem link={this.state.links[1]}/>
          <NavItem link={this.state.links[2]}/>
        </Breakpoint>
      </div>
    )
  }
}

export default Nav;
