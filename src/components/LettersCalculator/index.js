// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    lengthOfWord: 0,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      lengthOfWord: event.target.value.length,
    })
  }

  reset = () => {
    this.setState({
      searchInput: '',
      lengthOfWord: 0,
    })
  }

  render() {
    const {searchInput, lengthOfWord} = this.state
    console.log(typeof searchInput)

    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
          <div className="text-container">
            <h1 className="main-heading">Calculate the Letters you enter</h1>
            <label htmlFor="textInput">Enter the phrase</label>
            <input
              id="textInput"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />

            <p className="button-display" onClick={this.reset}>
              No.of letters: {lengthOfWord}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
