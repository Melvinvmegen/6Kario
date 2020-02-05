import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Button from "../../Components/Button/Button";
import classes from "./Header.module.css"

class Header extends Component {
  state = {
    action: "Recrutez-moi !",
    show: false,
  }

  toggleMenu = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow })
  }


  render() {
    return (
      <div className={classes.SiteHeader}>
        <div className={classes.SiteHeaderWrapper}>
          <header className={classes.MainHeader + " d-none d-sm-none d-md-none d-lg-flex"}>
            <Nav />
          </header>
        </div>
      </div>
    )
  }
}

export default Header;

