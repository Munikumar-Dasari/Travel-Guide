import './index.css'

const TravelPackageItem = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails

  return (
    <li className="package-item">
      <img src={imageUrl} alt={name} className="images" />
      <div className="details-container">
        <h1 className="package-name">{name}</h1>
        <p className="package-description">{description}</p>
      </div>
    </li>
  )
}

export default TravelPackageItem
