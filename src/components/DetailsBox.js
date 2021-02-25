const DetailsBox = ({ info }) => {

  return (
    <div className="event-info">
      <h2>Event Details</h2>
      <ul>
        <li>Name: { info.title }</li>
        <li>ID: { info.id }</li>
      </ul>
    </div>
  )
}

export default DetailsBox
