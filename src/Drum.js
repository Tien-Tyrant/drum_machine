import React from "react";

class Drum extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <audio id={this.props.id} src={this.props.src}></audio>
                {this.props.id}
            </div>
        )
    }
}

export default Drum;