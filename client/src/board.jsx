
import React from "react";

import Tile from "./tile";

export default class Board extends React.Component {
    render() {
        return (
            <div class="board">
                {this.props.tiles?.map(tile => <Tile {...tile} />)}
            </div>
        )
    }
}