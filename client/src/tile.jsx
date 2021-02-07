
import React from "react";

export default class Tile extends React.Component {
    render() {
        return (
            <div className={`tile ${this.props.type}`}>
                <Number number={this.props.number} />
            </div>
        )
    }
}

const Number = ({ number }) => <div>{number}</div>