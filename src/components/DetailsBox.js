const DetailsBox = ({ info }) => {

  return (
    <div className="location-info">
      <h2>Event Details</h2>
      <ul>
        <li>ID: { info.id }</li>
        <li>Name: { info.title }</li>
      </ul>
    </div>
  )
}

export default DetailsBox
