import { useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import FireLocationMarker from './FireLocationMarker'
import EventLocationMarker from './EventLocationMarker'
import LocationInfoBox from './LocationInfoBox'

// CREATE GOOGLE WORLD MAP

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

//GENERATE GEOLOCATED WEATHER MARKERS FROM NASA EONET API

  const fireMarkers = eventData.map(ev => {
    if(ev.categories[0].id === 8) {
      return <FireLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }
    return null
  })

  const eventMarkers = eventData.map(ev => {
    if(ev.categories[0].id === 8) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }
    return null
  })

  // GRAB API KEY

  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;




  return (
    <>
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={ center }
        defaultZoom={ zoom }
      >
        { eventMarkers }

      </GoogleMapReact>

      <div>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
      </div>

    </div>
    </>
  )
}



Map.defaultProps = {
  center: {
    lat: 36.9741,
    lng: -122.0308
  },
  zoom: 1
}

export default Map
