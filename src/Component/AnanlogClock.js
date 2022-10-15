import React, { Component } from 'react';
// import {condition,setCondition} from '../Component/Clock'
import '../Component/analog_clock.css';
import Clock from './Clock';

class App extends Component {



  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
    currentDate: new Date(),
    interval: {},
    setDate: new Date(),
    customTimer: {
      min: new Date().getMinutes(),
      hour: new Date().getHours(),
      sec: new Date().getSeconds()
    }

  }


  componentDidMount() {
    if (!window.Timer)
      window.Timer = setInterval(this.getTimer, 1000);
  }

  getTimer = () => {

    var newDate = new Date()

    newDate.setHours(parseInt(this.state.customTimer.hour))
    newDate.setMinutes(parseInt(this.state.customTimer.min))
    // newDate.setSeconds(parseInt(this.state.customTimer.sec))

    this.setClock(newDate)


  }


  Submit = (e) => {
    e.preventDefault();

    this.setState({ customTimer: { hour: e.target[0].value.substr(0, 2), min: e.target[0].value.substr(-2), sec: 0 } })

  }

  setClock = (currentDate) => {

    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    this.setState({ secondRatio: secondRatio = currentDate.getSeconds() / 60 })
    this.setState({ minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60 })
    this.setState({ hourRatio: hourRatio = (minuteRatio + currentDate.getHours()) / 12 });
    return currentDate;

  }

  render() {
    const { secondRatio, minuteRatio, hourRatio } = this.state
    return (
      <div>
        <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} />
        <form onSubmit={this.Submit}>
          <label>Choose an time:</label>
          <input id="" type="time" className='from-control' onChange={this.setTimeValue} name='customTime' />
          <button>submit</button>
        </form>
      </div>

    );
  }

}
export default App;
