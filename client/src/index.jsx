
import React from "react";
import ReactDOM from "react-dom";

import Board from "./board";
import OtherPlayers from "./other-players";
import CurrentPlayer from "./current-player";

class App extends React.Component {

    state = {
        gameState: null,
        player: "Brandon",
    };

    componentDidMount() {
        setInterval(this.pollGameState, 100);
    }

    pollGameState = () => {
        fetch("/gameState")
            .then(res => res.json())
            .then(gameState => this.setState({ gameState }))
    }

    render() {
        return (
            <div>
                <Board {...this.state.gameState}></Board>

                <OtherPlayers gameState={this.state.gameState} player={this.state.player} />

                <CurrentPlayer gameState={this.state.gameState} player={this.state.player} />

                <pre>
                    {JSON.stringify(this.state.gameState, null, 2)}
                </pre>
            </div>
        )
    }
}

window.addEventListener("load", () => {
    ReactDOM.render(<App/>, document.body);
})