// Code DigitalClicker Component Here
import React, { Component } from 'react'

export class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementClicks = () => {
    this.setState(prevState => {
      return {
        timesClicked: prevState.timesClicked + 1
      }
    })

  }

  render() {
    return (
      <div>
        <button onClick={this.incrementClicks}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker
