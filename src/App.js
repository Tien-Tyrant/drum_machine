import React from 'react';
import './App.css';
import Drum from './Drum';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
      volume: 0.4,
      power: true
    }

    this.updateDisplay = this.updateDisplay.bind(this);
    this.volumChange = this.volumChange.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.switchPower = this.switchPower.bind(this);
  }

  kicks = [
    { id: "Q", name: "Heater-1", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { id: "W", name: "Heater-2", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { id: "E", name: "Heater-3", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { id: "A", name: "Heater-4", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { id: "S", name: "Clap", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { id: "D", name: "Open-HH", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { id: "Z", name: "Kick-n'-Hat", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { id: "X", name: "Kick", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { id: "C", name: "Close-HH", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  ]

  updateDisplay(drumName) {
    this.setState({
      display: drumName
    })
  }

  volumChange(e) {
    if (this.state.power) {
      this.setState({
        volume: e.target.value,
        display: "Volumn: " + Math.round(100 * e.target.value)
      });
      setTimeout(() => this.clearDisplay(), 1000)
    }
  }

  clearDisplay() {
    this.setState({
      display: ''
    })
  }

  switchPower(){
    this.setState(state => ({
      power: !state.power
    }))
  }

  render() {
    return (
      <div id="drum-machine" className="inner-container">
        <div className='pad-bank'>

          {
            this.kicks.map(kick =>
              <Drum id={kick.id} src={kick.audio_src} power={this.state.power} volume={this.state.volume} displayName={kick.name} updateDisplay={this.updateDisplay}></Drum>
            )
          }
        </div>
        <div className='controls'>
          <div className='control'>
            <p>Power</p>
            <div className='select'>
              <div className='inner' onClick={this.switchPower} style={{ float: this.state.power ? 'right':'left' }}></div>
            </div>
          </div>
          <p id="display">{this.state.display}</p>
          <div className='volum-slider'>
            <input max="1" min="0" step="0.01" type='range' onChange={this.volumChange} value={this.state.volume} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
