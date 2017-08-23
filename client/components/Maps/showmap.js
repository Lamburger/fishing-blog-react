//GoogleMapsLoader.KEY = 'AIzaSyBpUIx2WNMcJyZOqwCD6aLIP7UpdPzLlWw';



import React from 'react';
import GoogleMapReact from 'google-map-react';
import fish from "../../img/fish.png";
const AnyReactComponent = ({ text }) => <div><img width="50" height="auto" src={fish}></img></div>;
class Minimap extends React.Component {
  render() {
    const defaultOptions =  {
      center: {lat: this.props.lat , lng: this.props.lng },
      zoom: 0,
      markable: this.props.markable
    }
    return (
      <GoogleMapReact ref="map" id={this.props.lat} setup={this.props}
      bootstrapURLKeys={{key:'AIzaSyBpUIx2WNMcJyZOqwCD6aLIP7UpdPzLlWw'}}
        center={defaultOptions.center}
        defaultZoom={defaultOptions.zoom}>
        <AnyReactComponent
          lat={defaultOptions.center.lat}
          lng={defaultOptions.center.lng}
          text={'zzz'}
        />
      </GoogleMapReact>

    );
  }
  componentDidMount() {
    const self = this;
    window.onload = function(e){ 
    var timer = setInterval(function(){  
   
 function initMap() {

  if (document.getElementById("submitMap") == null) return;
  clearInterval(timer)

  window.markerList = {};
  document.getElementById("submitMap").innerHTML = "";

   const iframe = document.getElementById('myframe1')
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write('<div id="iMap" style="width: 100%; height: 100%"></div>');
    iframe.contentWindow.document.close();

   const mapContainer = iframe.contentWindow.document.querySelector('#iMap');
    var map = new google.maps.Map(mapContainer, {
              center: {lat: 48.7, lng: 31},
              zoom: 6
            });
 /* var map = new google.maps.Map(document.getElementById('submitMap'), {
    zoom: 1,
    center: {lat: 40, lng: -74 }
  });*/
  map.addListener('click', (function(e) {
      for(var i=0; i<window.markerList.length; i++){
        window.markerList[i].setMap(null);
    }
    window.markerList = new Array();
    window.submitLatLng = [e.latLng.lat(),e.latLng.lng()]
    placeMarkerAndPanTo(e.latLng, map);
  }));
}

function placeMarkerAndPanTo(latLng, map) {
  window.markerList.push(new google.maps.Marker({
    position: latLng,
    map: map
  }))
  map.panTo(latLng);
}
initMap();
    // }

      }, 1000);
        }

    }

}

export default Minimap;


