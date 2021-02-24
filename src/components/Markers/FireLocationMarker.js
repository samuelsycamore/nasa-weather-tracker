import { WiFire } from "weather-icons-react";

const FireLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiFire size={30} color='red' />
    </div>
  )
}

export default FireLocationMarker