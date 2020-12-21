const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Express EJS Template
app.set('view engine', 'ejs')
app.set('views', './views')

// Static foler
app.use(express.static(__dirname + '/public'));


// Express body-Parser
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use('/', require('./routes/index'));
app.use('/search', require('./routes/search'));
app.use('/link', require("./routes/getLink"));
app.use('/chapter', require("./routes/getChapter"));
app.use('/image', require("./routes/getImages"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));