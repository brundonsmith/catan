
import React from "react";
import ReactDOM from "react-dom";

import Board from "./board";

class App extends React.Component {

    state = {
        gameState: null
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

                <button onClick={() => call(`addPlayer`, { color: "red", name: "brandon" })}>
                    Add player
                </button>
                <pre>
                    {JSON.stringify(this.state.gameState, null, 2)}
                </pre>
            </div>
        )
    }
}

function call(func, params) {
    const queryString = Object.entries(params).map(([key, value]) => {
        return `${key}=${JSON.stringify(value)}`;
    }).join('&');

    return fetch(`/api/${func}?${queryString}`, { method: "POST" })
}

window.addEventListener("load", () => {
    ReactDOM.render(<App/>, document.body);
})