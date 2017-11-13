const
    express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http');

const
    app = express(),
    server = http.createServer(app),
    options = {
        port: 80
    };

app.use(bodyParser.urlencoded({ extended: true }));

server.listen(options.port, async () => {
    console.info(`Listening ${options.port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    let today = new Date();
    today = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;

    res.send(`Today is ${today}. Have a good day!`)
});

