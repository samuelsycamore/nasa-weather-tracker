import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import DetailsBox from './DetailsBox'
import FireLocationMarker from './Markers/FireLocationMarker'
import StormLocationMarker from './Markers/StormLocationMarker'
import HazeLocationMarker from './Markers/HazeLocationMarker'
import FloodLocationMarker from './Markers/FloodLocationMarker'
import QuakeLocationMarker from './Markers/QuakeLocationMarker'
import SnowLocationMarker from './Markers/SnowLocationMarker'


// CREATE GOOGLE WORLD MAP

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  //GENERATE GEOLOCATED WEATHER MARKERS FROM NASA EONET API

  const eventMarkers = eventData.map((ev) => {
    const lookup = {
      [7]: HazeLocationMarker,
      [8]: FireLocationMarker,
      [9]: FloodLocationMarker,
      [10]: StormLocationMarker,
      [16]: QuakeLocationMarker,
      [17]: SnowLocationMarker,
    };

    const DetectedComponent = lookup[ev.categories[0].id];
    if (!DetectedComponent) return null;

    return (
      <DetectedComponent
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
      />
    );
  });
  

  // GRAB API KEY FROM .ENV
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;




  return (
    <>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={ center }
          defaultZoom={ zoom }>

            { eventMarkers }

        </GoogleMapReact>

        <div>
          {locationInfo && <DetailsBox info={locationInfo} />}
        </div>

      </div>
    </>
  )
}

// SET DEFAULT LOCATION ON GOOGLE MAPS (SANTA CRUZ, CA) 
// AND ZOOM ALL THE WAY OUT

Map.defaultProps = {
  center: {
    lat: 36.9741,
    lng: -122.0308
  },
  zoom: 1
}

export default Map
