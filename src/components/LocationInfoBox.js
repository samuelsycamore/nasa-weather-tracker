import Expire from './GoAway'

const LocationInfoBox = ({ info }) => {

  return (
    <Expire delay="5000">
    <div className="location-info">
      <h2>Event Location Info</h2>
      <ul>
        <li>ID: <strong>{ info.id }</strong></li>
        <li>ID: <strong>{ info.title }</strong></li>
      </ul>
    </div>
    </Expire>
  )
}

export default LocationInfoBox
