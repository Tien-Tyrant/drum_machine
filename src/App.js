import React from 'react';
import './App.css';
import Drum from './Drum';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentKick: ''
    }

    this.updateDisplay = this.updateDisplay.bind(this);
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

  updateDisplay() {

  }

  render() {
    return (
      <div id="drum-machine" className="App">
        <div className='pad-bank'>

          {
            this.kicks.map(kick =>
              <Drum id={kick.id} src={kick.audio_src} displayName={kick.name} updateDisplay={this.updateDisplay}></Drum>
            )
          }
        </div>
        <div className='controls'>
          <div className='control'>
            <p>Power</p>

          </div>
          <p id="display">{this.state.currentKick}</p>
          <div className='volum-slider'>
            <input max="1" min="0" step="0.01" type='range' value="0.41"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
