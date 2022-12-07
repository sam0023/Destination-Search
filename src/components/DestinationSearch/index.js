// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {search: ''}

  update = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const updatedList = destinationsList.filter(element =>
      element.name.toLowerCase().includes(search.toLowerCase()),
    )

    const x = (
      <div className="bg">
        <h1>Destination Search</h1>
        <div className="search-div">
          <input type="search" onChange={this.update} value={search} />
          <img
            className="search-img"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="destination-container">
          {updatedList.map(element => (
            <DestinationItem key={element.id} item={element} />
          ))}
        </ul>
      </div>
    )
    return x
  }
}
export default DestinationSearch
