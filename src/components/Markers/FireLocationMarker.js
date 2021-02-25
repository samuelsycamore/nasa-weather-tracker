import { WiFire } from "weather-icons-react";

const FireLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiFire size={34} color='salmon' />
    </div>
  )
}

export default FireLocationMarker
