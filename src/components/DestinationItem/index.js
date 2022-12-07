// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  const x = (
    <li className="img-container">
      <img src={imgUrl} className="img" alt={name} />
      <p>{name}</p>
    </li>
  )
  return x
}
export default DestinationItem
