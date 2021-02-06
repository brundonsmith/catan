
const express = require('express');
const app = express();

const { gameState, ...gameFuncs } = require("./game");

app.use(express.static('../client/dist'));

app.get('/gameState', (req, res) => {
    res.contentType = "application/json";
    res.send(JSON.stringify(gameState));
})

app.post('/api/:func', (req, res) => {
    const func = gameFuncs[req.params.func];
    
    const params = Object.entries(req.query)
        .map(([key, value]) => {
            try {
                value = JSON.parse(value);
            } catch { }

            return [key, value];
        })
        .reduce((obj, [key, value]) => ({...obj, [key]: value}), {});

    func(params);
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Website listening on port ${PORT}!`));