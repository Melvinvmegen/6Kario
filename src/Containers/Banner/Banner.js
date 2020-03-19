import React, { Component } from "react";
import classes from './Banner.module.css'

class Banner extends Component {
  render() {

    const videoBanner = "https://vod-progressive.akamaized.net/exp=1584625038~acl=%2A%2F1661935281.mp4%2A~hmac=e73a7bd6ca9bba524d6f7668fd6f4a10c442442c2ea66ba377cbec554479de3b/vimeo-prod-skyfire-std-us/01/2299/15/386498776/1661935281.mp4"

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
