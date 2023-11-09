import React from 'react';
import './App.css';
import Drum from './Drum';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentKick: ''
    }
  }

  kicks = [
    { id: "Q", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { id: "W", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { id: "E", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { id: "A", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { id: "S", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { id: "D", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { id: "Z", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { id: "X", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { id: "C", audio_src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
  ]

  render() {
    return (
      <div id="drum-machine" className="App">
        <div className='pad-bank'>

          {
            this.kicks.map(kick =>
              <Drum id={kick.id} src={kick.audio_src}></Drum>
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
