const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const game = require('./routes/game');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/abc', express.static('assets'));
app.use('/matching_game', game);

app.listen(port, () => {
    console.log(`Server is running on port : http://localhost:${port}`)
});