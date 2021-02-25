import { WiFlood } from "weather-icons-react";

const FloodLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiFlood size={30} color='lightblue' />
    </div>
  )
}

export default FloodLocationMarker
