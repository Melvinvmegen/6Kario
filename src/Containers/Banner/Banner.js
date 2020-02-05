import React, { Component } from "react";
import classes from './Banner.module.css'

class Banner extends Component {
  render() {
    return (
      <div id="section-banner" className={classes.SectionBanner}>
        <div className={classes.BannerContainer}>
          <div className={classes.Banner}>
            <div className={classes.arrow}><a href="#Créations"><i className="fa fa-chevron-down"></i></a></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
