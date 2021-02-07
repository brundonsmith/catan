
import React from "react";

export default class Tile extends React.Component {
    render() {
        return (
            <div className={`tile ${this.props.type}`} style={{ "--row": getRow(this.props.index), "--col": getCol(this.props.index) }}>
                <Number number={this.props.number} />
            </div>
        )
    }
}

function getRow(index) {
    if (index < 3) {
        return 0;
    } else if (index < 7) {
        return 1;
    } else if (index < 12) {
        return 2;
    } else if (index < 16) {
        return 3;
    } else {
        return 4;
    }
}

function getCol(index) {
    if (index === 7) {
        return 0;
    } else if (index === 3 || index === 12) {
        return 0.5;
    } else if (index === 0 || index === 8 || index === 16) {
        return 1;
    } else if (index === 4 || index === 13) {
        return 1.5;
    } else if (index === 1 || index === 9 || index === 17) {
        return 2;
    } else if (index === 5 || index === 14) {
        return 2.5;
    } else if (index === 2 || index === 10 || index === 18) {
        return 3;
    } else if (index === 6 || index === 15) {
        return 3.5;
    } else if (index === 11) {
        return 4;
    }
}

const Number = ({ number }) => <div>{number}</div>