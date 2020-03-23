import React, { Component } from "react";
import classes from './Banner.module.css'

class Banner extends Component {
  render() {

    const videoBanner = "https://vod-progressive.akamaized.net/exp=1584970360~acl=%2A%2F1661935281.mp4%2A~hmac=f703c80d0a50273d9424205a66019a27761e5ae8b37e41781d24f7b5a4143408/vimeo-prod-skyfire-std-us/01/2299/15/386498776/1661935281.mp4"

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
