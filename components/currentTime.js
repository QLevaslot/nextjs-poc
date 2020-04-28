import React from 'react'

class CurrentTime extends React.Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return <div id="timer">
      Current time is: {this.state.date.toString()}
    </div>
  }
}

export default CurrentTime;
