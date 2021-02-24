const EventLocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <span className="event">EVENT</span>
          </div>
  )
}

export default EventLocationMarker
