import { WiSnowWind } from "weather-icons-react";

const SnowLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiSnowWind size={34} color='white' />
    </div>
  )
}

export default SnowLocationMarker
