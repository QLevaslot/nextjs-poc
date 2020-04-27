import React from 'react'
import ReactMapGL from 'react-map-gl'

const accessToken = process.env.MAPBOX_KEY;

class Map extends React.Component {
  state = {
    viewport: {
      width: '100vw',
      height: '100vh',
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13
    }
  };

  render() {
    return <div id="map">
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken={accessToken}
        onViewportChange={(viewport) => this.setState({viewport})}
        {...this.state.viewport}
      />
    </div>
  }
}

export default Map;
