import React, { Fragment, Component } from 'react';
import ReactMapGL, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import classes from './Map.module.css';

class Map extends Component {
  state = {
    viewport: {
      width: "45vw",
      height: "50vh",
      latitude: 43.15,
      longitude: 6.0667,
      zoom: 13
    },
    userLocation: {},
    krioLocation: {
      latitude: 43.15,
      longitude: 6.0667,
    }
  };

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude
      };
      let newViewport = {
        width: "45vw",
        height: "50vh",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 13
      }
      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation
      })
    })
  }

  handleViewportChange = (viewport) => {
    this.setState({ viewport: viewport })
  }

  render() {

    const mapBoxToken = "pk.eyJ1IjoibWVsdmludm1lZ2VuIiwiYSI6ImNrMjZnd3hpbzFkaTYzZG1xMG00MmIxYmkifQ.V1kngSDHDfV4C5-csnMnwA"
    const mapBoxStyle = "mapbox://styles/mapbox/outdoors-v11"

    return (
      <div className={classes.Map}>
        <button className={classes.btnMap} onClick={this.setUserLocation}>Ma position</button>
        <ReactMapGL {...this.state.viewport}
          onViewportChange={(viewport => this.handleViewportChange(viewport))}
          mapboxApiAccessToken={mapBoxToken}
          mapStyle={mapBoxStyle}>
          <Marker
            latitude={this.state.krioLocation.latitude}
            longitude={this.state.krioLocation.longitude}>
            <div>6Krio</div>
          </Marker>
          {Object.keys(this.state.userLocation).length !== 0 ? (
            <Marker
              latitude={this.state.userLocation.lat}
              longitude={this.state.userLocation.long}
            >
              <div className="fas fa-map-marker-alt"></div>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </Marker>
          ) : null
          }
        </ReactMapGL>
      </div >
    )
  }
}

export default Map;
