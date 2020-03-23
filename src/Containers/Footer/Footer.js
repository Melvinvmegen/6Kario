import React, { Component } from "react";
import SocialLinks from "../../Components/SocialLinks/SocialLinks";
import Logo from "../../Components/Logo/Logo";
import classes from "./Footer.module.css";

class Footer extends Component {
  state = {
    socialLinks: [
      { id: 1, name: 'LinkedIn', icon: 'fa-linkedin', ahref: "https://www.linkedin.com/in/melvin-van-megen/" },
      { id: 2, name: 'Twitter', icon: 'fa-twitter', ahref: "" },
      { id: 3, name: 'Skype', icon: 'fa-skype', ahref: "" },
      { id: 4, name: 'Github', icon: 'fa-github', ahref: "https://github.com/Melvinvmegen" },
    ]
  }

  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.FooterInner}>
          <div className={classes.FooterInnerLeft}>
            <Logo footer />
          </div>
          <div className={classes.FooterInnerCenter}>
            <h2><a href="/">Mentions légales</a></h2>
          </div>
          <div className={classes.FooterInnerRight}>
            <SocialLinks links={this.state.socialLinks} />
          </div>
        </div>
      </div>
    )
  }

}

export default Footer;

