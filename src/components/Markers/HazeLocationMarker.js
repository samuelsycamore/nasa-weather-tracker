import { WiDust } from "weather-icons-react";

const HazeLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <WiDust size={30} color='white' />
    </div>
  )
}

export default HazeLocationMarker
