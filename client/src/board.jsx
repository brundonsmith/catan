
import React from "react";

import Tile from "./tile";

export default class Board extends React.Component {
    render() {
        return (
            <div class="board">
                {this.props.tiles?.map((tile, index) => 
                    <Tile 
                        {...tile} 
                        index={index} 
                        hasRobber={this.props.robberTile === index} 
                        key={index} />)}
            </div>
        )
    }
}

  
// {this.props.roadSlots?.map((road, index) => 
//     <Road {...road} index={index} key={index} />)}
    
// {this.props.settlementSlots?.map((road, index) => 
//     <Settlement {...road} index={index} key={index} />)}