// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onClickRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Random Number</h1>
        <p className="paragraph">
          Generate a random number in the range 0 to 100
        </p>
        <button
          type="button"
          className="btn"
          onClick={this.onClickRandomNumber}
        >
          Generate
        </button>
        <p className="number">{randomNumber}</p>
      </div>
    )
  }
}

export default RandomNumberGenerator
