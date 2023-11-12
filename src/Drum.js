import React from "react";

class Drum extends React.Component {

    activeStyle(powerOn) {
        return powerOn ?
            {
                backgroundColor: "orange",
                boxShadow: "0 3px orange",
                height: 77,
                marginTop: 13
            }
            :
            {
                backgroundColor: "grey",
                boxShadow: "0 3px grey",
                height: 77,
                marginTop: 13,
            }

    }

    silenceStyle = {
        backgroundColor: "grey",
        marginTop: 10,
        boxShadow: "3px 3px 5px black"
    }

    constructor(props) {
        super(props)

        this.state = {
            padStyle: this.silenceStyle
        }
        this.click = this.click.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.activatePad = this.activatePad.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress);
    }

    handleKeyPress(event) {
        if (event.key.toUpperCase() === this.props.id) {
            this.click();
        }
    }


    activatePad() {
        this.setState({
            padStyle: this.activeStyle(this.props.power)
        })

        setTimeout(() => this.setState({
            padStyle: this.silenceStyle
        }), 100)
    }

    click() {
        this.activatePad();
        if (this.props.power) {
            const drum = document.getElementById(this.props.id);
            drum.currentTime = 0;
            drum.volume = this.props.volume;
            drum.play();
            this.props.updateDisplay(this.props.displayName);
        }
    }

    render() {
        return (
            <div className="drum-pad" onClick={this.click} style={this.state.padStyle}>
                <audio className="clip" id={this.props.id} src={this.props.src}></audio>
                {this.props.id}
            </div>
        )
    }
}

export default Drum;