import React from 'react';
import GoogleMapReact from 'google-map-react';
 import {Image} from 'react-bootstrap';
 
const AnyReactComponent = () => <div style={{fontSize:'50px' ,zIndex:'10' , display:'block'}}><Image src="map-mark.png"/></div>;
 
class Map extends React.Component {
    
  static defaultProps = {
    center: {
      lat: 30.952291,
      lng: 31.152633
    },
    zoom: 15
  };

 
  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC8g-UuLj8zY-oo8ZVvXPqr27L8BxT_ENU'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
                lat={this.props.center.lat}
                lng={this.props.center.lng}
            />
        </GoogleMapReact>

      </div>
    );
  }
}
 
export default Map;