import React from "react";

class Drum extends React.Component {
    constructor(props) {
        super(props)
        this.click = this.click.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this);
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

    click() {
        const drum = document.getElementById(this.props.id);
        drum.currentTime = 0;
        drum.play();
        // this.activatePad(),
        // setTimeout((() => this.activatePad()), 100),
        this.props.updateDisplay(this.props.displayName);
    }

    render() {
        return (
            <div className="drum-pad" onClick={this.click}>
                <audio className="clip" id={this.props.id} src={this.props.src}></audio>
                {this.props.id}
            </div>
        )
    }
}

export default Drum;