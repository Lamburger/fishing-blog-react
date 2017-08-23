import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
var React = require('react');
var ReactDOM = require('react-dom');
import _ from 'lodash'
// Wrap all `react-google-maps` components with `withGoogleMap` HOC
// then wraps it into `withScriptjs` HOC
// It loads Google Maps JavaScript API v3 for you asynchronously.
// Name the component AsyncGettingStartedExampleGoogleMap
const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        onClick={props.onMapClick}
      >

      </GoogleMap>
    )
  )
);
// Then, render it:
ReactDOM.render(
  <AsyncGettingStartedExampleGoogleMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
    loadingElement={
      <div style={{ height: `100%` }}>

      </div>
    }
    containerElement={
      <div style={{ height: `100%` }} />
    }
    mapElement={
      <div style={{ height: `100%` }} />
    }
    onMapLoad={_.noop}
    onMapClick={_.noop}
    markers={2}
    onMarkerRightClick={_.noop}
  />,
  document.getElementById('mapZ')
);