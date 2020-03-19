import React, { Component } from "react";
import classes from './Banner.module.css'

class Banner extends Component {
  render() {

    const videoBanner = "https://vod-progressive.akamaized.net/exp=1584640898~acl=%2A%2F1661935281.mp4%2A~hmac=d52bac67798d9d5ae4fdb9c56941d68c3e13a579c981951ad57a1e6fc1e0ed58/vimeo-prod-skyfire-std-us/01/2299/15/386498776/1661935281.mp4"

    return (
      <div id="section-banner" className={classes.SectionBanner}>
        <div className={classes.videoContainer}>
          <video autoPlay="autoplay" loop="loop" muted className={classes.videoBanner}>
            <source src={videoBanner} type="video/mp4" />
              Your browser does not support the video tag.
        </video>
          <div className={classes.Arrow}><a href="#Label"><i className="fa fa-chevron-down"></i></a></div>
        </div>
      </div>
    );
  }
}

export default Banner;
