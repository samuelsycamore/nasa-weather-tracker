import { useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationInfoBox from './LocationInfoBox'
import EventLocationMarker from './Markers/EventLocationMarker'
import FireLocationMarker from './Markers/FireLocationMarker'
import StormLocationMarker from './Markers/StormLocationMarker'


// CREATE GOOGLE WORLD MAP

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

//GENERATE GEOLOCATED WEATHER MARKERS FROM NASA EONET API

  const eventMarkers = eventData.map(ev => {
    // DROUGHT
    if(ev.categories[0].id === 6) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // DUST AND HAZE
    if(ev.categories[0].id === 7) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // WILDFIRES
    if(ev.categories[0].id === 8) {
      return <FireLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // FLOODS
    if(ev.categories[0].id === 9) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // SEVERE STORMS
    if(ev.categories[0].id === 10) {
      return <StormLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // WATER COLOR
    if(ev.categories[0].id === 13) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // LANDSLIDES
    if(ev.categories[0].id === 14) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // SEA AND LAKE ICE
    if(ev.categories[0].id === 15) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // EARTHQUAKES
    if(ev.categories[0].id === 16) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // SNOW
    if(ev.categories[0].id === 17) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // TEMPERATURE EXTREMES
    if(ev.categories[0].id === 18) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }

    // MANMADE
    if(ev.categories[0].id === 19) {
      return <EventLocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
    }


    return null
  })

  // GRAB API KEY FROM .ENV

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
