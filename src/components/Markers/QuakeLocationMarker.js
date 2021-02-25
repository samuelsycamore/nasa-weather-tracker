import { WiEarthquake } from "weather-icons-react";

const QuakeLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiEarthquake size={34} color='yellow' />
    </div>
  )
}

export default QuakeLocationMarker
