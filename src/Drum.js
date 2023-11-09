import React from "react";

class Drum extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="drum-pad">
                <audio className="clip" id={this.props.id} src={this.props.src}></audio>
                {this.props.id}
            </div>
        )
    }
}

export default Drum;